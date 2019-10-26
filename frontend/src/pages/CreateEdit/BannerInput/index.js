import React, { useState, useRef, useEffect } from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import api from '../../../services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  };

  return (
    <Container>
      <label htmlFor="banner">
        <article>
          {preview ? (
            <img
              src={
                preview ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="User avatar"
            />
          ) : (
            <>
              <MdCameraAlt size={54} color="rgba(255, 255, 255, 0.3)" />
              <p>Selecionar imagem</p>
            </>
          )}
        </article>

        <input
          type="file"
          name=""
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
