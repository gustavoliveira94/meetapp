import * as Yup from 'yup';
import {
  isBefore, parseISO, startOfDay, endOfDay,
} from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

const limitPerPage = 10;

class MeetupController {
  async index(req, res) {
    const { date, page } = req.query;
    const parsedDate = parseISO(date);

    const meetup = await Meetup.findAll({
      where: {
        date: { [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)] },
      },
      order: ['date'],
      limit: limitPerPage,
      offset: (page - 1) * limitPerPage,
      attributes: ['id', 'name', 'description', 'location', 'date'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['fullname', 'username', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(meetup);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res
        .status(400)
        .json({ error: "Can't create an event with a date that is already gone" });
    }

    const meetup = await Meetup.create({
      ...req.body,
      user_id: req.userId,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
      banner_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(404).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({ error: "You don't have permission to update this meetup" });
    }

    if (isBefore(meetup.date, new Date())) {
      return res.status(403).json({ error: "Can't edit a meetup that already ocurred" });
    }

    const {
      id, name, description, location, date,
    } = await meetup.update(req.body);

    return res.json({
      id,
      name,
      description,
      location,
      date,
    });
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    const response = meetup;

    if (!meetup) {
      return res.status(404).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({ error: "You don't have permission to update this meetup" });
    }

    if (isBefore(meetup.date, new Date())) {
      return res.status(403).json({ error: "Can't delete a meetup that already ocurred" });
    }

    await meetup.destroy();

    return res.json(response);
  }
}

export default new MeetupController();
