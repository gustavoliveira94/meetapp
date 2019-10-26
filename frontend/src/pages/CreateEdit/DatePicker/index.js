import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt-BR';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactDatePicker
      name={fieldName}
      selected={selected}
      onChange={setSelected}
      ref={ref}
      locale="pt"
      showTimeSelect
      timeFormat="HH:mm"
      minDate={new Date()}
      timeIntervals={1}
      timeCaption="Horário"
      dateFormat="dd/MM/yyyy HH:mm"
      autoComplete="off"
    />
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
