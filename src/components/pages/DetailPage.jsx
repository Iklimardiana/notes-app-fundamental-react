/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../NoteDetail';
import { getDetailNote } from '../../utils/api';

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const getDetailNoteHandler = async () => {
    try {
      const { error, data } = await getDetailNote(id);
      if (!error) {
        setData(data);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getDetailNoteHandler();
  }, []);

  return (
    <section>
      {data ? <NoteDetail note={data} /> : <p>Tidak ada data</p>}
    </section>
  );
}

export default DetailPage;
