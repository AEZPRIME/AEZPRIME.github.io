/* ============================================================
   LABTECA — DATOS
   Aquí se agregan los libros y las imágenes. No toques main.js
   para esto: solo edita los arreglos de este archivo.

   DOS TIPOS DE LIBRO:
   1) Libro alojado en Google Drive → usa el campo `driveId`
      (el código entre "/d/" y "/view" del enlace para compartir).
      Requisito en Drive: "Cualquiera con el enlace puede ver".
   2) Libro/archivo local (ya viene dentro del proyecto) → usa el
      campo `archivo` con la ruta dentro de assets/, por ejemplo
      'assets/insertos/Glucosa.pdf'. No necesita Drive ni permisos.

   PORTADA PROPIA (opcional, para cualquiera de los dos tipos):
   agrega el campo `portada` con la ruta de tu imagen de portada,
   por ejemplo 'assets/img/portadas/parasitologia/PARA-01.jpg'.
   Si no se indica, se usa automáticamente la miniatura de Drive
   (cuando el libro es de Drive) o un ícono genérico (cuando es local).
   ============================================================ */

const CATEGORIAS = [
  { id:'parasitologia',  nombre:'Parasitología',   codigo:'PARA',  color:'var(--cat-parasitologia)' },
  { id:'hematologia',    nombre:'Hematología',      codigo:'HEMA',  color:'var(--cat-hematologia)' },
  { id:'uroanalisis',    nombre:'Uroanálisis',      codigo:'URO',   color:'var(--cat-uroanalisis)' },
  { id:'cultivos',       nombre:'Cultivos',         codigo:'CULT',  color:'var(--cat-cultivos)' },
  { id:'anatomia',       nombre:'Anatomía',         codigo:'ANAT',  color:'var(--cat-anatomia)' },
  { id:'bioquimica',     nombre:'Bioquímica',       codigo:'BIOQ',  color:'var(--cat-bioquimica)' },
  { id:'insertos',       nombre:'Insertos',         codigo:'INST',  color:'var(--cat-insertos)' },
  { id:'microbiologia',  nombre:'Microbiología',    codigo:'MICRO', color:'var(--cat-microbiologia)' },
  { id:'inmunologia',    nombre:'Inmunología',      codigo:'INMU',  color:'var(--cat-inmunologia)' },
  { id:'general',        nombre:'Manuales Generales', codigo:'GEN', color:'var(--cat-general)' },
];

const LIBROS = [

  /* ---------- PARASITOLOGÍA (Google Drive) ---------- */
  {
    id: 2, categoria: 'parasitologia', codigo: 'PARA-02',
    titulo: 'Atlas de Parasitología', autor: 'Consuelo López', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para la identificación morfológica de parásitos de interés en el laboratorio clínico.',
    driveId: '1tG5vg-iYxHE3Fv_iusKDbxL6srGh-xFo'
  },
  {
    id: 3, categoria: 'parasitologia', codigo: 'PARA-03',
    titulo: 'Atlas de Parasitología', autor: 'Varios autores', edicion: '',
    descripcion: 'Compendio fotográfico de formas parasitarias (huevos, larvas, trofozoítos y quistes) para apoyo diagnóstico.',
    driveId: '1qxzSpxT23stEYIKojY9mbS5F3L1J-mQR'
  },
  {
    id: 4, categoria: 'parasitologia', codigo: 'PARA-04',
    titulo: 'Atlas Curso de Parasitología', autor: 'Material de curso', edicion: '2016',
    descripcion: 'Material de apoyo de curso con imágenes y casos para el estudio práctico de la parasitología humana.',
    driveId: '1Z_wjlLtqnEh1YkB_l7EaW7Addj6mFsu_'
  },
  {
    id: 6, categoria: 'parasitologia', codigo: 'PARA-06',
    titulo: 'Atlas de Parasitología', autor: 'Colección 0539', edicion: '',
    descripcion: 'Atlas de consulta rápida con láminas a color de las principales parasitosis humanas.',
    driveId: '1wCFPWqLMnApkwMZjKfvPo7B6BljfP8SY'
  },
  {
    id: 58, categoria: 'parasitologia', codigo: 'PARA-07',
    titulo: 'Atlas de Parasitología Humana', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para la identificación de parásitos humanos.',
    driveId: '1_wZzApGkllGBwvSeXC9jKlwdPzs_WT52'
  },
  {
    id: 59, categoria: 'parasitologia', codigo: 'PARA-08',
    titulo: 'Documento de Parasitología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en parasitología; el archivo original no tiene un título identificable.',
    driveId: '1iAwyByWFIDrV9kBcuTH_LFJ-sQ1mLvBp'
  },
  {
    id: 60, categoria: 'parasitologia', codigo: 'PARA-09',
    titulo: 'Parasitosis Humanas', autor: 'Botero, D. & Restrepo, M.', edicion: '5ª edición',
    descripcion: 'Texto de referencia en parasitología médica: ciclos biológicos, diagnóstico de laboratorio y manejo clínico de las principales parasitosis humanas.',
    driveId: '12TCYo1ZqM2j3eZrq6o3vFu6xVZ4VibIc'
  },
  {
    id: 61, categoria: 'parasitologia', codigo: 'PARA-10',
    titulo: 'Parásitos Intestinales', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía sobre los principales parásitos intestinales de interés en el laboratorio clínico.',
    driveId: '15KBneyj8gNO1h6xa-E8ZoxZo2GqSmkgz'
  },
  {
    id: 62, categoria: 'parasitologia', codigo: 'PARA-11',
    titulo: 'Parasitología Médica', autor: 'Material de referencia', edicion: '',
    descripcion: 'Texto de parasitología médica orientado al diagnóstico de laboratorio.',
    driveId: '1r0gkANBW92_oFL3m2MD-zhqolmGUlrC_'
  },
  {
    id: 63, categoria: 'parasitologia', codigo: 'PARA-12',
    titulo: 'Parasitología Humana para Bioquímicos', autor: 'Material de referencia', edicion: '',
    descripcion: 'Texto de parasitología humana orientado a la formación de bioquímicos y profesionales de laboratorio.',
    driveId: '1L_eoy7RoxWPou8vuP9sMxzSrPHV9TD33'
  },
  {
    id: 65, categoria: 'parasitologia', codigo: 'PARA-14',
    titulo: 'Flashcards de Parasitología', autor: 'Material de estudio', edicion: '',
    descripcion: 'Tarjetas de estudio rápido con los puntos clave de las principales parasitosis.',
    driveId: '1H2A-5Vc7tPmsVVY3YorjqRywDtuuZU4K'
  },
  {
    id: 66, categoria: 'parasitologia', codigo: 'PARA-15',
    titulo: 'El Examen General de las Heces Fecales', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía sobre el procesamiento e interpretación del examen general de heces en el laboratorio.',
    driveId: '15qL2JH_E2VeWgVyPeWHI3AVO0XJUEOQ3'
  },
  {
    id: 67, categoria: 'parasitologia', codigo: 'PARA-16',
    titulo: 'Parasitología en el Laboratorio', autor: 'Dialnet', edicion: '',
    descripcion: 'Artículo técnico sobre el diagnóstico parasitológico en el laboratorio clínico.',
    driveId: '1chBbnms0uYT78mGS_4yYst_fv4JEsogD'
  },
  {
    id: 68, categoria: 'parasitologia', codigo: 'PARA-17',
    titulo: 'Atlas de Parasitología Clínica', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para la identificación morfológica de parásitos en muestras clínicas.',
    driveId: '1m1pIb7zTJJDbejZClKB8xkcNHLX_UeS4'
  },
  {
    id: 69, categoria: 'parasitologia', codigo: 'PARA-18',
    titulo: 'Atlas de Parasitología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas de consulta con imágenes de referencia de formas parasitarias de interés diagnóstico.',
    driveId: '1uWAJTXs2T3_DNnpFOeAhaCxyudX5pg71'
  },
  {
    id: 70, categoria: 'parasitologia', codigo: 'PARA-19',
    titulo: 'Atlas de Parasitología: Imágenes de Huevos, Quistes y Parásitos Intestinales y Cavitarios', autor: 'Material de referencia', edicion: '',
    descripcion: 'Compendio fotográfico de huevos, quistes y parásitos intestinales y cavitarios para apoyo diagnóstico.',
    driveId: '1MML5dz6tXPT-y50COR6J1L6hXlzUdhF5'
  },
  {
    id: 71, categoria: 'parasitologia', codigo: 'PARA-20',
    titulo: 'Atlas de Parasitología Humana', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para la identificación de parásitos humanos.',
    driveId: '1W6TVAF54-A7R24J1s_YjsPqcS9pHK7uH'
  },
  {
    id: 72, categoria: 'parasitologia', codigo: 'PARA-21',
    titulo: 'Atlas de Parasitología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas de consulta con imágenes de referencia de formas parasitarias de interés diagnóstico.',
    driveId: '18ua6VmVFvsv4TaYvp1V_8PN5ma3U49eR'
  },
  {
    id: 73, categoria: 'parasitologia', codigo: 'PARA-22',
    titulo: 'Atlas de Parasitología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas de consulta con imágenes de referencia de formas parasitarias de interés diagnóstico.',
    driveId: '1qq3VJ8sPIDeTilM6M35FCo3cxqFwyeIB'
  },
  {
    id: 74, categoria: 'parasitologia', codigo: 'PARA-23',
    titulo: 'Atlas de Parasitología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas de consulta con imágenes de referencia de formas parasitarias de interés diagnóstico.',
    driveId: '1wEmcqgQ-G99F2l7o42qHfoeetWbHo1eE'
  },
  {
    id: 75, categoria: 'parasitologia', codigo: 'PARA-24',
    titulo: 'Documento de Parasitología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en parasitología; el archivo original no tiene un título identificable.',
    driveId: '1Z-YEpQLMojsqpbCKCq8DZIv35v7AXTUA'
  },
  {
    id: 76, categoria: 'parasitologia', codigo: 'PARA-25',
    titulo: 'Documento de Parasitología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en parasitología; el archivo original no tiene un título identificable.',
    driveId: '1SkB-iKrZeuTOtVjxADlVZ8eQHO48Zpcb'
  },
  {
    id: 77, categoria: 'parasitologia', codigo: 'PARA-26',
    titulo: 'Medios Auxiliares para el Diagnóstico de las Parasitosis Intestinales', autor: 'Organización Mundial de la Salud', edicion: '2ª edición',
    descripcion: 'Manual técnico de la OMS con orientación sobre métodos copromicroscópicos y tinciones para el diagnóstico de parásitos intestinales.',
    driveId: '1nPlD1jkLR6UefZZf18qjMBWH2vRIFJcN'
  },
  {
    id: 78, categoria: 'parasitologia', codigo: 'PARA-27',
    titulo: 'Documento de Parasitología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en parasitología; el archivo original no tiene un título identificable.',
    driveId: '1S_mIwTIbJKkuS8k1SBLPCn5WANcHcVtC'
  },
  {
    id: 79, categoria: 'parasitologia', codigo: 'PARA-28',
    titulo: 'Parasitología y Micología', autor: 'Ministerio de Salud - Perú', edicion: '',
    descripcion: 'Manual técnico del Ministerio de Salud de Perú sobre parasitología y micología de interés en el laboratorio clínico.',
    driveId: '127hH5S572npmBTk8T_CY8s_8WWQJoNg5'
  },

  /* ---------- HEMATOLOGÍA CLÍNICA (Google Drive) ---------- */
  {
    id: 7, categoria: 'hematologia', codigo: 'HEMA-01',
    titulo: 'Perfiles de Laboratorio Clínico', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía de perfiles e indicaciones de pruebas de laboratorio, útil como apoyo en la interpretación de paneles hematológicos.',
    driveId: '1E9lLLGtaz165Pfx4JGCs24iXfn7qrWMn'
  },
  {
    id: 8, categoria: 'hematologia', codigo: 'HEMA-02',
    titulo: 'Atlas de Leucocitos', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas fotográfico enfocado en la morfología e identificación de las series leucocitarias en frotis de sangre periférica.',
    driveId: '1dRdJwOzPuDhL9nGoYVDgoVeswxWHjfmH'
  },
  {
    id: 9, categoria: 'hematologia', codigo: 'HEMA-03',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas general de hematología con imágenes de referencia de las distintas líneas celulares sanguíneas.',
    driveId: '1iPGo8jw1TDnWBad5WFX50QA0WTQLTNxW'
  },
  {
    id: 10, categoria: 'hematologia', codigo: 'HEMA-04',
    titulo: 'Atlas a Color de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas a color para el estudio morfológico de células sanguíneas normales y patológicas.',
    driveId: '1lKLMsdM7ayZoW-jl9YDiXMogTtDIxuQM'
  },
  {
    id: 11, categoria: 'hematologia', codigo: 'HEMA-05',
    titulo: 'Atlas de Hematología Abbott', autor: 'Abbott', edicion: '',
    descripcion: 'Atlas de referencia elaborado por Abbott con imágenes para el apoyo en la interpretación de extendidos de sangre periférica.',
    driveId: '1mUFK0yJVt1yXqpT1B9bO616h2Os3LpjF'
  },
  {
    id: 80, categoria: 'hematologia', codigo: 'HEMA-06',
    titulo: 'Recuento de Plaquetas', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía técnica sobre el recuento de plaquetas en el laboratorio de hematología.',
    driveId: '160PoeMEWIDg17HQnfu1NqBHgjRdsNMFO'
  },
  {
    id: 81, categoria: 'hematologia', codigo: 'HEMA-07',
    titulo: 'Pruebas de Hemostasia', autor: 'Tutorías Laboratorio Clínico', edicion: '',
    descripcion: 'Material de tutoría sobre las pruebas de hemostasia utilizadas en el laboratorio clínico.',
    driveId: '1xtmrLrP2J3V_V1oL8LxCUU7RuDukUeZr'
  },
  {
    id: 82, categoria: 'hematologia', codigo: 'HEMA-08',
    titulo: 'Mini Atlas: Series Leucocitarias', autor: 'Material de referencia', edicion: '',
    descripcion: 'Mini atlas fotográfico enfocado en la identificación de las series leucocitarias.',
    driveId: '1eMyVlXtJVysssnS5-UkoAISST90k8niV'
  },
  {
    id: 83, categoria: 'hematologia', codigo: 'HEMA-09',
    titulo: 'Manual de Diagnóstico de la Malaria No Complicada', autor: 'Material de referencia', edicion: '',
    descripcion: 'Manual técnico para el diagnóstico de laboratorio de la malaria no complicada.',
    driveId: '1QWEbdD3UektU0hbOQUoCwAVsBofChYwR'
  },
  {
    id: 86, categoria: 'hematologia', codigo: 'HEMA-12',
    titulo: 'Manual AMIR de Hematología', autor: 'AMIR', edicion: '12ª edición',
    descripcion: 'Manual de estudio de hematología orientado a la preparación de exámenes clínicos.',
    driveId: '15aIx9IRGN-wq8HMAEPDkSuKv7jFKAVWW'
  },
  {
    id: 87, categoria: 'hematologia', codigo: 'HEMA-13',
    titulo: 'Derivados Hemáticos (Cap. 3)', autor: 'Material de referencia', edicion: '',
    descripcion: 'Capítulo de referencia sobre los derivados hemáticos y su uso clínico.',
    driveId: '1lvaqf66FB9SxEBlvgSdUocFDscjg4iKR'
  },
  {
    id: 89, categoria: 'hematologia', codigo: 'HEMA-15',
    titulo: 'Hemograma: Manual de Interpretación', autor: 'Failace, G.', edicion: '5ª edición',
    descripcion: 'Manual clásico para la interpretación del hemograma en la práctica clínica y de laboratorio.',
    driveId: '1pXny1-9OISAXfi-Tz11k2XKnKovvt8RY'
  },
  {
    id: 93, categoria: 'hematologia', codigo: 'HEMA-19',
    titulo: 'Hematología', autor: 'Moraleda Jiménez, J. M.', edicion: '',
    descripcion: 'Libro de hematología orientado al pregrado en ciencias de la salud.',
    driveId: '1UyqK2owWwmcwIBPurkYcmltQdpUNSEKj'
  },
  {
    id: 94, categoria: 'hematologia', codigo: 'HEMA-20',
    titulo: 'Hematología Práctica', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía práctica de hematología orientada al trabajo diario en el laboratorio clínico.',
    driveId: '1j8H_8eeyPN8ryGiUq2eFq_PQPMxfsTmX'
  },
  {
    id: 95, categoria: 'hematologia', codigo: 'HEMA-21',
    titulo: 'Hematología', autor: 'AMIR', edicion: '6ª edición, 2014',
    descripcion: 'Manual de estudio de hematología orientado a la preparación de exámenes clínicos.',
    driveId: '1GtU_grnUZjJt8dzqwUTogjPJh20OwLOR'
  },
  {
    id: 96, categoria: 'hematologia', codigo: 'HEMA-22',
    titulo: 'Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de consulta general en hematología clínica.',
    driveId: '1TKDRp4zEyzOAgUTLBQxs2PDdy1P7303B'
  },
  {
    id: 100, categoria: 'hematologia', codigo: 'HEMA-26',
    titulo: 'Manual del Hemograma y el Frotis', autor: 'Duarte Romero, Mónica', edicion: '2013',
    descripcion: 'Manual práctico para la realización e interpretación del hemograma y el frotis de sangre periférica.',
    driveId: '1G0dmB9ZSuOEo7lBgmm7D3KMLdFxtADj_'
  },
  {
    id: 101, categoria: 'hematologia', codigo: 'HEMA-27',
    titulo: 'Documento de Hematología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en hematología; el archivo original no tiene un título identificable.',
    driveId: '1g8YokDo9Lniu6TMTAj53ZWYkzLw7ocdh'
  },
  {
    id: 102, categoria: 'hematologia', codigo: 'HEMA-28',
    titulo: 'Hematología Práctica', autor: 'Dacie & Lewis', edicion: '12ª edición',
    descripcion: 'Texto clásico de hematología práctica, referencia obligada en el laboratorio clínico.',
    driveId: '1e7nvm8RY0XH9K4oxEJRjfbYeui9t7Q9e'
  },
  {
    id: 104, categoria: 'hematologia', codigo: 'HEMA-30',
    titulo: 'Banco de Sangre', autor: 'Material de referencia', edicion: '2022',
    descripcion: 'Material de apoyo sobre los fundamentos y procesos del banco de sangre.',
    driveId: '1unY3Fwb7md-k2I6cRNl09stvgVtUaL-x'
  },
  {
    id: 105, categoria: 'hematologia', codigo: 'HEMA-31',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas general de hematología con imágenes de referencia de las distintas líneas celulares sanguíneas.',
    driveId: '1gQrrs0V0x-mZsEj9jAiIkeTH6CT7bMlq'
  },
  {
    id: 107, categoria: 'hematologia', codigo: 'HEMA-33',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '2024',
    descripcion: 'Atlas actualizado de hematología con imágenes de referencia para el estudio morfológico.',
    driveId: '1k5d5FbQCyDAWerROoZzDlvQl5TcY2Dw1'
  },
  {
    id: 108, categoria: 'hematologia', codigo: 'HEMA-34',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas general de hematología con imágenes de referencia de las distintas líneas celulares sanguíneas.',
    driveId: '1wEi6V2KZ8P5GKzaOrJ8YgLTiLMgDCFih'
  },
  {
    id: 109, categoria: 'hematologia', codigo: 'HEMA-35',
    titulo: 'Atlas de Hematología Clínica', autor: 'Carr & Rodak', edicion: '',
    descripcion: 'Atlas de hematología clínica con imágenes de referencia para apoyo diagnóstico.',
    driveId: '1JBlvQc8X1UtpZ5A-MXJ-vvIPwi9ow3Ly'
  },
  {
    id: 110, categoria: 'hematologia', codigo: 'HEMA-36',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas general de hematología con imágenes de referencia de las distintas líneas celulares sanguíneas.',
    driveId: '1v6lLM7DqI0wUTNr-w1iENWFCeMyC_Yso'
  },
  {
    id: 111, categoria: 'hematologia', codigo: 'HEMA-37',
    titulo: 'Atlas de Hematología: Células Sanguíneas', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas centrado en la morfología de las células sanguíneas normales y patológicas.',
    driveId: '1Td7DAz9YSXHxjkYM5dTUyjS9oGlkFtK2'
  },
  {
    id: 112, categoria: 'hematologia', codigo: 'HEMA-38',
    titulo: 'Atlas de Hematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas general de hematología con imágenes de referencia de las distintas líneas celulares sanguíneas.',
    driveId: '1IWQlDXpnHXaLN2PTwbGN4rVskr_akG5b'
  },
  {
    id: 113, categoria: 'hematologia', codigo: 'HEMA-39',
    titulo: 'Documento de Hematología (sin título identificable)', autor: '—', edicion: '',
    descripcion: 'Documento de apoyo en hematología; el archivo original no tiene un título identificable.',
    driveId: '1hSW5lOhuD6zeF3A-9zMY-fdyJ2-vBORR'
  },
  {
    id: 114, categoria: 'hematologia', codigo: 'HEMA-40',
    titulo: '¿La Citometría Hemática sin Alteraciones Garantiza la Normalidad?', autor: 'Material de referencia', edicion: '',
    descripcion: 'Artículo técnico sobre la utilidad e interpretación de la citometría hemática.',
    driveId: '1irx5Q4vcdlGKJxZz5xrXLlE5T0Vw8Xps'
  },

  /* ---------- INSERTOS (archivos locales en assets/insertos/) ---------- */
  {
    id: 12, categoria: 'insertos', codigo: 'INST-01',
    titulo: 'Ácido Úrico', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de ácido úrico: fundamento, procedimiento y valores de referencia.',
    driveId: '1COi74861aezuRCwwl37svmg5764oDh7a'
  },
  {
    id: 13, categoria: 'insertos', codigo: 'INST-02',
    titulo: 'Albúmina', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de albúmina sérica.',
    driveId: '1vo6X7lc9z_r6bVwtcDrqy_th0tbCf5XI'
  },
  {
    id: 14, categoria: 'insertos', codigo: 'INST-03',
    titulo: 'Amilasa', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de amilasa.',
    driveId: '1mPg5Nm5UOMj8kn2fgvvh8baNxjTYFQQO'
  },
  {
    id: 15, categoria: 'insertos', codigo: 'INST-04',
    titulo: 'Bilirrubina Directa', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de bilirrubina directa.',
    driveId: '1iWMI-vZIv4ktJb2p2oWnib5VtpW8quAG'
  },
  {
    id: 16, categoria: 'insertos', codigo: 'INST-05',
    titulo: 'Bilirrubina Total', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de bilirrubina total.',
    driveId: '1KV7py3UAu4-K290ErG0hKlHMfAyUmaBS'
  },
  {
    id: 17, categoria: 'insertos', codigo: 'INST-06',
    titulo: 'Calcio (Arsenazo III)', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de calcio por el método de Arsenazo III.',
    driveId: '1bYFZLUCRCv0Dp06t1h84MJVyTw0Xq_3u'
  },
  {
    id: 18, categoria: 'insertos', codigo: 'INST-07',
    titulo: 'Colesterol Total', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de colesterol total.',
    driveId: '1nY9PQSLUdHridZc5cIs2nIJLNym9LfuM'
  },
  {
    id: 19, categoria: 'insertos', codigo: 'INST-08',
    titulo: 'Gamma-GT (GGT)', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de gamma-glutamil transferasa.',
    driveId: '1vzseBHINAOkWr6l7rH5WA1KB3xnvo0kA'
  },
  {
    id: 20, categoria: 'insertos', codigo: 'INST-09',
    titulo: 'Glucosa', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de glucosa.',
    driveId: '1_9s1wt6LUOBwaq2y5UgxOWm8BKBoWVmd'
  },
  {
    id: 21, categoria: 'insertos', codigo: 'INST-10',
    titulo: 'Lipasa', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de lipasa.',
    driveId: '1_IasZpS39659od1jjCrReU8yvsBg5M-H'
  },
  {
    id: 22, categoria: 'insertos', codigo: 'INST-11',
    titulo: 'Proteínas Totales', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de proteínas totales.',
    driveId: '116xpGuclaKWTfojxgtdtECz1dDQeE2Ih'
  },
  {
    id: 23, categoria: 'insertos', codigo: 'INST-12',
    titulo: 'TGO / AST', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de TGO/AST (aspartato aminotransferasa).',
    driveId: '1BzZ8MnvFvaH-JvPd2BalvFMVCQ-Pfx8b'
  },
  {
    id: 24, categoria: 'insertos', codigo: 'INST-13',
    titulo: 'TGP / ALT', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de TGP/ALT (alanina aminotransferasa).',
    driveId: '1PhFIMbd6ddcByVXvDnrYtIYWGEg0NlsJ'
  },
  {
    id: 25, categoria: 'insertos', codigo: 'INST-14',
    titulo: 'Urea Enzimática', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de urea por método enzimático.',
    driveId: '1TIXSyenELRHODPST5lYcFzPV077-c6nh'
  },
  {
    id: 26, categoria: 'insertos', codigo: 'INST-15',
    titulo: 'Colesterol HDL Directo', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación directa de colesterol HDL.',
    driveId: '1PMH9gRvcaVJon06PIIm9mfVfyHm1B4PM'
  },
  {
    id: 27, categoria: 'insertos', codigo: 'INST-16',
    titulo: 'Colesterol HDL (Precipitación)', autor: 'Inserto del reactivo', edicion: '',
    descripcion: 'Ficha técnica del reactivo para la determinación de colesterol HDL por método de precipitación.',
    driveId: '1DdhiPFh4uRRJXHE1ididCrUxZ8Jro2Nc'
  },

  /* ---------- MANUALES GENERALES (Google Drive) ---------- */
  {
    id: 28, categoria: 'general', codigo: 'GEN-01',
    titulo: 'La Clínica y el Laboratorio', autor: 'Balcells', edicion: '23ª edición',
    descripcion: 'Manual clásico de referencia que relaciona la clínica con la interpretación de las pruebas de laboratorio en las distintas áreas del diagnóstico.',
    driveId: '1qiLUkoWbw5BbphDviPpGOOzNcijlt5kF'
  },

  /* ---------- CULTIVOS (Google Drive) ---------- */
  {
    id: 29, categoria: 'cultivos', codigo: 'CULT-01',
    titulo: 'Carbapenemasas en Microbiología', autor: 'Luis Martínez', edicion: '2017',
    descripcion: 'Documento técnico sobre la detección e interpretación de carbapenemasas en aislamientos microbiológicos.',
    driveId: '1VysnWrGlJPDHO5FS56pJQIHbt5jJnowW'
  },
  {
    id: 30, categoria: 'cultivos', codigo: 'CULT-02',
    titulo: 'Medios de Cultivo', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía de medios de cultivo usados en microbiología clínica: composición, indicaciones y lectura de resultados.',
    driveId: '1a70XGvTqZJtHJus5e7brDAX9toZbZ7d0'
  },
  {
    id: 115, categoria: 'cultivos', codigo: 'CULT-03',
    titulo: 'Bacteriología Clínica', autor: 'Marianela Z. R.', edicion: '',
    descripcion: 'Texto de bacteriología clínica orientado al diagnóstico microbiológico en el laboratorio.',
    driveId: '1Kltyo3BbuksDWhVr2pVDFyiQ9i7J_xqz'
  },
  {
    id: 116, categoria: 'cultivos', codigo: 'CULT-04',
    titulo: 'Bacilos Gram Negativos Exigentes', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía técnica sobre la identificación de bacilos gram negativos exigentes en el laboratorio de cultivos.',
    driveId: '1LK8P6QdPM0TQbp2AJpOksmcH6EC5dF2n'
  },
  {
    id: 147, categoria: 'cultivos', codigo: 'CULT-05',
    titulo: 'Identificación de Bacterias', autor: 'Cervantes Hernández, Diego Alfredo', edicion: '',
    descripcion: 'Trabajo académico sobre métodos de identificación de bacterias en el laboratorio de microbiología.',
    driveId: '1xe48rabnKv0rYLu0xCSxaYy6djiQn2xO'
  },

  /* ---------- ANATOMÍA (Google Drive) ---------- */
  {
    id: 31, categoria: 'anatomia', codigo: 'ANAT-01',
    titulo: 'Atlas de Anatomía Humana', autor: 'Martini', edicion: '',
    descripcion: 'Atlas de referencia de anatomía humana con láminas ilustradas de los principales sistemas del cuerpo.',
    driveId: '13dNELpzNrirl65dvk4AiJRL6r4mp2cA1'
  },
  {
    id: 39, categoria: 'anatomia', codigo: 'ANAT-09',
    titulo: 'Manual AMIR de Endocrinología', autor: 'AMIR', edicion: '12ª edición',
    descripcion: 'Manual de estudio de endocrinología orientado a la preparación de exámenes clínicos.',
    driveId: '17EiiFn70QvCewPnMqwy8zsQPeiUu9WlD'
  },
  {
    id: 148, categoria: 'anatomia', codigo: 'ANAT-13',
    titulo: 'Atlas de Anatomía Humana', autor: 'Nielsen & Miller', edicion: '1ª edición',
    descripcion: 'Atlas de anatomía humana con láminas ilustradas para el estudio de los sistemas del cuerpo.',
    driveId: '1Q_8pS4TxswrzDkaVO_hF-7eayn7YKe5E'
  },
  {
    id: 149, categoria: 'anatomia', codigo: 'ANAT-14',
    titulo: 'Anatomía Humana, Tomo 1', autor: 'Latarjet, M. & Ruiz Liard, A.', edicion: '5ª edición',
    descripcion: 'Texto clásico y de referencia de anatomía humana, primer tomo de la quinta edición.',
    driveId: '15-ExOrBrmLQY0tjWeMupZex4KQQGnKIU'
  },
  {
    id: 150, categoria: 'anatomia', codigo: 'ANAT-15',
    titulo: 'Biología Celular', autor: 'De Juan Herrero, J.; Fernández Jover, E.; Iborra Rodríguez, F. J.', edicion: '',
    descripcion: 'Texto de biología celular orientado a la formación universitaria en ciencias de la salud.',
    driveId: '1TgrsrCjNzPXL5hWKFWia-dhEHD4IvqdM'
  },

  /* ---------- UROANÁLISIS (Google Drive) ---------- */
  {
    id: 43, categoria: 'uroanalisis', codigo: 'URO-01',
    titulo: 'Análisis de Orina: Atlas Color', autor: 'Graff', edicion: '',
    descripcion: 'Atlas a color para el análisis de orina, referencia clásica en uroanálisis.',
    driveId: '1VvJUfhkvSKXQrba2yOTUST8-C1YZ5EBa'
  },
  {
    id: 46, categoria: 'uroanalisis', codigo: 'URO-04',
    titulo: 'Análisis de una Muestra de Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía práctica sobre el procesamiento y análisis de una muestra de orina en el laboratorio.',
    driveId: '1oiQv2r7xeX0yGTa-DUQkm-Yy3O6Zy8-w'
  },
  {
    id: 47, categoria: 'uroanalisis', codigo: 'URO-05',
    titulo: 'Cristales y Cálculos en Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía de referencia sobre la identificación de cristales y cálculos urinarios en el sedimento.',
    driveId: '1k1Acztdb6q7FQW3ADxCsua5oONM21-PJ'
  },
  {
    id: 117, categoria: 'uroanalisis', codigo: 'URO-08',
    titulo: 'Urianálisis P3', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de estudio sobre uroanálisis, parte 3.',
    driveId: '1qWjFCjOWPpyw4aef7cTeQztuaFoM6rLC'
  },
  {
    id: 118, categoria: 'uroanalisis', codigo: 'URO-09',
    titulo: 'Urianálisis I', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de estudio sobre los fundamentos del uroanálisis.',
    driveId: '1Hkm5s5Gw11fZ7wX8YUXjyDalQh8g01oZ'
  },
  {
    id: 119, categoria: 'uroanalisis', codigo: 'URO-10',
    titulo: 'Tabla de Células, Cristales y Cilindros en la Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Tabla de referencia rápida para identificar células, cristales y cilindros en el sedimento urinario.',
    driveId: '1Ixd6HxemStEq1IgNGW5iJhYhbGWhxlt5'
  },
  {
    id: 120, categoria: 'uroanalisis', codigo: 'URO-11',
    titulo: 'Sedimento Urinario', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía sobre el estudio del sedimento urinario en el laboratorio clínico.',
    driveId: '1ddsi5cALz9kSAAfob13vGXX4Hgx5u_4h'
  },
  {
    id: 121, categoria: 'uroanalisis', codigo: 'URO-12',
    titulo: 'Recomendaciones para el Análisis de Orina y del Sedimento Urinario', autor: 'Material de referencia', edicion: '',
    descripcion: 'Recomendaciones técnicas para estandarizar el análisis de orina y del sedimento urinario.',
    driveId: '16meZy-jAEzFFhiLlMVzahWfByFL6J7VC'
  },
  {
    id: 122, categoria: 'uroanalisis', codigo: 'URO-13',
    titulo: 'Documento de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre uroanálisis.',
    driveId: '1B1q0OhOUmDw2UFKUw5rjXKHAY8VjKlt-'
  },
  {
    id: 123, categoria: 'uroanalisis', codigo: 'URO-14',
    titulo: 'Mini Atlas de Sedimentos Urinarios', autor: 'Material de referencia', edicion: '',
    descripcion: 'Mini atlas de bolsillo con imágenes de referencia de sedimentos urinarios.',
    driveId: '10JiSp7iQGMlyvBYowytxHj5mHt-ZT3Kj'
  },
  {
    id: 124, categoria: 'uroanalisis', codigo: 'URO-15',
    titulo: 'Guía Práctica de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía práctica orientada al procesamiento e interpretación del uroanálisis.',
    driveId: '1u_6TpEDH8_Dn0kNOKGBPd-nKE1tItShm'
  },
  {
    id: 125, categoria: 'uroanalisis', codigo: 'URO-16',
    titulo: 'El Examen General de Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía sobre el procesamiento e interpretación del examen general de orina.',
    driveId: '1IcygqiIV7FM9NmqMPjdSbQdf__SOsukZ'
  },
  {
    id: 126, categoria: 'uroanalisis', codigo: 'URO-17',
    titulo: 'Cilindros y Cristales en Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía de referencia sobre cilindros y cristales presentes en la orina.',
    driveId: '1AJXhQOsyEDV_M_dnAl2yttdl8bo8SUTE'
  },
  {
    id: 127, categoria: 'uroanalisis', codigo: 'URO-18',
    titulo: 'Documento de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre uroanálisis.',
    driveId: '1JtmJWtYAMAottqjsna46q1Ej-4GRZzG0'
  },
  {
    id: 128, categoria: 'uroanalisis', codigo: 'URO-19',
    titulo: 'Atlas de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para el estudio del uroanálisis.',
    driveId: '1W8S_enDuh1ySxcHGwRCSUzgSzA5EP-58'
  },
  {
    id: 129, categoria: 'uroanalisis', codigo: 'URO-20',
    titulo: 'Atlas de Orina', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para el análisis de orina.',
    driveId: '1-p7w8ZtzqIU9H08AlhlCFrsDkRrm_1PZ'
  },
  {
    id: 130, categoria: 'uroanalisis', codigo: 'URO-21',
    titulo: 'Atlas del Sedimento Urinario', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia del sedimento urinario.',
    driveId: '18ETBc4wyg2aryEGgADpqIsOUGJfejV0B'
  },
  {
    id: 131, categoria: 'uroanalisis', codigo: 'URO-22',
    titulo: 'Atlas de Sedimento Urinario', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia del sedimento urinario.',
    driveId: '1fcU7QuS8HoQJ433RQYV2KY700_Uonf4G'
  },
  {
    id: 132, categoria: 'uroanalisis', codigo: 'URO-23',
    titulo: 'Atlas de Urianálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas con imágenes de referencia para el estudio del urianálisis.',
    driveId: '1edjqBkCqJJ6DbirHYX5PghXIgSEo0p_w'
  },
  {
    id: 133, categoria: 'uroanalisis', codigo: 'URO-24',
    titulo: 'Atlas de Microscopía Clínica', autor: 'Material de referencia', edicion: '4ª edición',
    descripcion: 'Atlas de microscopía clínica con imágenes de referencia para el laboratorio.',
    driveId: '11W239ViCefSn2CkM3i-ByYJ14v3oqPf8'
  },
  {
    id: 134, categoria: 'uroanalisis', codigo: 'URO-25',
    titulo: 'Atlas de la Orina al Microscopio', autor: 'Material de referencia', edicion: '',
    descripcion: 'Atlas fotográfico del estudio microscópico de la orina.',
    driveId: '1DRh61-EscgofMjviL247Zbxnz-NmP1gQ'
  },
  {
    id: 136, categoria: 'uroanalisis', codigo: 'URO-27',
    titulo: 'Documento de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre uroanálisis.',
    driveId: '1PS01_BKQZFG3dJCOUFfuOXR0cavRt3P3'
  },
  {
    id: 137, categoria: 'uroanalisis', codigo: 'URO-28',
    titulo: 'Documento de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre uroanálisis.',
    driveId: '1JD_WcHgB375yh3ogJhiK6R9q9--YhQ5l'
  },
  {
    id: 138, categoria: 'uroanalisis', codigo: 'URO-29',
    titulo: 'Documento de Uroanálisis', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre uroanálisis.',
    driveId: '1affGNIPHhH3DpT2VtWuwjma45Wj3T-lP'
  },
  {
    id: 151, categoria: 'uroanalisis', codigo: 'URO-30',
    titulo: 'Análisis de Orina y de los Líquidos Corporales', autor: 'Graff, L.', edicion: '2ª edición',
    descripcion: 'Texto de referencia sobre el análisis de orina y de los principales líquidos corporales.',
    driveId: '1ww4dxQiuAaKNbCSYourWzXS1xkWO3amS'
  },

  /* ---------- MICROBIOLOGÍA (Google Drive) ---------- */
  {
    id: 139, categoria: 'microbiologia', codigo: 'MICRO-01',
    titulo: 'Sherris Microbiología Médica', autor: 'Kenneth J. Ryan', edicion: '5ª edición',
    descripcion: 'Texto clásico de referencia en microbiología médica, ampliamente usado en la formación biomédica.',
    driveId: '1o_isWjP1jMlGh6wKaV4tvs_Lf7a6RLne'
  },
  {
    id: 140, categoria: 'microbiologia', codigo: 'MICRO-02',
    titulo: 'Microbiología Médica', autor: 'Material de referencia', edicion: '',
    descripcion: 'Texto de microbiología médica para el estudio y consulta en el laboratorio clínico.',
    driveId: '1CstnIQrPF2biV05qK25C-9lH614HWsKY'
  },
  {
    id: 141, categoria: 'microbiologia', codigo: 'MICRO-03',
    titulo: 'Manual Práctico de Microbiología Básica', autor: 'Sandra Carlina Rivas', edicion: '',
    descripcion: 'Manual práctico orientado a las técnicas básicas de microbiología en el laboratorio.',
    driveId: '1CB7Cs424XtfzpmWU3ia8SpvG5VVfw74X'
  },
  {
    id: 142, categoria: 'microbiologia', codigo: 'MICRO-04',
    titulo: 'Manual AMIR de Infecciosas y Microbiología', autor: 'AMIR', edicion: '12ª edición',
    descripcion: 'Manual de estudio de enfermedades infecciosas y microbiología orientado a la preparación de exámenes clínicos.',
    driveId: '1XNAWwvFqMqtrSFaZDUWd1-bVX5kbSOrM'
  },
  {
    id: 143, categoria: 'microbiologia', codigo: 'MICRO-05',
    titulo: 'Documento de Microbiología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material de referencia técnico sobre microbiología.',
    driveId: '1VPyzu0-2W5fll_nsYJN7x5sYZaClAgfJ'
  },
  {
    id: 144, categoria: 'microbiologia', codigo: 'MICRO-06',
    titulo: 'Métodos y Técnicas Microbiológicas II', autor: 'Material de referencia', edicion: '',
    descripcion: 'Material didáctico sobre métodos y técnicas microbiológicas de laboratorio.',
    driveId: '1pOBb0htBIal92L7alRia4DofG8mSgEH4'
  },
  {
    id: 145, categoria: 'microbiologia', codigo: 'MICRO-07',
    titulo: 'Microbiología', autor: 'Ríos', edicion: '',
    descripcion: 'Texto de microbiología orientado al estudio y consulta en el laboratorio clínico.',
    driveId: '1DMSvbwOhNbue2QEvdQP4gA2F4PRP6s-B'
  },
  {
    id: 146, categoria: 'microbiologia', codigo: 'MICRO-08',
    titulo: 'Manual de Laboratorio en Microbiología', autor: 'Material de referencia', edicion: '2023',
    descripcion: 'Manual de procedimientos de laboratorio aplicados a la microbiología clínica.',
    driveId: '18jlv71LFHJxiqWq1KSSIv4O_HwBY_i9Z'
  },
  {
    id: 152, categoria: 'microbiologia', codigo: 'MICRO-09',
    titulo: 'Microbiología Médica', autor: 'Jawetz', edicion: '25ª edición',
    descripcion: 'Texto clásico de microbiología médica, referencia obligada en ciencias de la salud.',
    driveId: '1zX7J59LZmMNo3mwoEf-EKsVUlO8Co0GI'
  },
  {
    id: 153, categoria: 'microbiologia', codigo: 'MICRO-10',
    titulo: 'Microbiología Clínica', autor: 'Prats', edicion: '',
    descripcion: 'Texto de microbiología clínica orientado al diagnóstico de laboratorio.',
    driveId: '1pi3QvXDE-y1naPjx8p_vvaiUz0MNpjEn'
  },

  /* ---------- INMUNOLOGÍA (Google Drive) ---------- */
  {
    id: 50, categoria: 'inmunologia', codigo: 'INMU-01',
    titulo: 'Fundamentación de Inmunohematología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Texto de fundamentos de inmunohematología aplicada al banco de sangre y la medicina transfusional.',
    driveId: '1B0f9lrn0zCdILzZuIQ6srCCnJxJDaPGa'
  },
  {
    id: 56, categoria: 'inmunologia', codigo: 'INMU-07',
    titulo: 'Manual AMIR de Inmunología', autor: 'AMIR', edicion: '12ª edición',
    descripcion: 'Manual de estudio de inmunología orientado a la preparación de exámenes clínicos.',
    driveId: '1yq4eFiVJwUnrEiUcC25mRjrvB6jzqbJK'
  },
  {
    id: 57, categoria: 'inmunologia', codigo: 'INMU-08',
    titulo: 'Técnicas de Inmunología', autor: 'Material de referencia', edicion: '',
    descripcion: 'Guía de técnicas de laboratorio aplicadas a la inmunología clínica.',
    driveId: '1GtM_cZO3s7Yv-7rVbH04e7mgCFPeUGM2'
  },
  {
    id: 154, categoria: 'inmunologia', codigo: 'INMU-09',
    titulo: 'Manual de Prácticas de Laboratorio en Inmunología Clínica', autor: 'Material de referencia', edicion: '2ª edición',
    descripcion: 'Manual práctico con protocolos de laboratorio para la enseñanza de la inmunología clínica.',
    driveId: '1GQiYBAdulG7HfkyGMVdOEhiZObOkMplL'
  },
  {
    id: 155, categoria: 'inmunologia', codigo: 'INMU-10',
    titulo: 'Inmunología', autor: 'Rojas, W.', edicion: '17ª edición',
    descripcion: 'Texto de referencia en inmunología, ampliamente utilizado en la enseñanza biomédica en Latinoamérica.',
    driveId: '1QawD86gJ7x7GhNO7zalLK6PYOgSXtHZw'
  },
  {
    id: 156, categoria: 'inmunologia', codigo: 'INMU-11',
    titulo: 'Bases de Inmunología Clínica', autor: 'Aguilar', edicion: '2ª edición',
    descripcion: 'Texto de bases de la inmunología clínica orientado a la práctica de laboratorio.',
    driveId: '1Ax6XJGZ4K3aY30FJi6jn33JIWrDED0FK'
  },

  /* ---------- BIOQUÍMICA (Google Drive) ---------- */
  {
    id: 157, categoria: 'bioquimica', codigo: 'BIOQ-01',
    titulo: 'Bioquímica de los Procesos Metabólicos', autor: 'Melo, V. & Cuamatzi Tapia, O.', edicion: '3ª edición',
    descripcion: 'Texto que explica de forma ilustrada los procesos bioquímicos celulares: termodinámica y bioenergética, propiedades de las biomoléculas y procesos metabólicos celulares.',
    driveId: '1M14QWdifQ81EJhL0UZzEi88TW-3IdM4v'
  },
  {
    id: 158, categoria: 'bioquimica', codigo: 'BIOQ-02',
    titulo: 'Bioquímica Médica', autor: 'Material de referencia', edicion: '',
    descripcion: 'Texto de bioquímica médica orientado a la formación en ciencias de la salud.',
    driveId: '1C-6RyCwSze38E7ZiKhPA0IRMhXwiVpko'
  },
  {
    id: 159, categoria: 'bioquimica', codigo: 'BIOQ-03',
    titulo: 'Bioquímica Ilustrada Harper', autor: 'Harper', edicion: '30ª edición',
    descripcion: 'Texto clásico de bioquímica médica ilustrada, referencia obligada en ciencias de la salud.',
    driveId: '12HHqZE_n3ZsEuHjC6v2hVfU-5jvAqlJz'
  },
  {
    id: 160, categoria: 'bioquimica', codigo: 'BIOQ-04',
    titulo: 'Bioquímica', autor: 'Pratt & Cornely', edicion: '',
    descripcion: 'Texto de bioquímica con enfoque clínico para la comprensión de los procesos metabólicos.',
    driveId: '1PGZ_iIxUqpZ-NjInIMhXC08ulRL-elCz'
  },

  /* Para agregar otro libro, copia un bloque de arriba y cambia los datos. */
];

/* ============================================================
   GALERÍA — fotos propias del laboratorio.
   Generado automáticamente a partir de assets/img/galeria/.
   Puedes editar o agregar la propiedad `caption` a cualquier
   entrada para ponerle un pie de foto.
   ============================================================ */
const GALERIA = [
  { driveId: '1IQRCZ03Za7NDvX-Dx2rGw-fIwJ97zDP6' },
  { driveId: '1K8MCEDhKEmIJcxrans15dK79i59xUrSF' },
  { driveId: '1uZbS5NUqyr041l_uDaMGuYjchOVsCtSd' },
  { driveId: '1qNsGGrWDYUxIAofDlAfzHFnS7Suyj6Wt' },
  { driveId: '1QELpabZo7x-yGEqN3NE_4j7jr_jugLKD' },
  { driveId: '10NeXTnWCJd3EcQUXxHRO_u0jhxM-PdzO' },
  { driveId: '1QMPw9osKEvbx5QY0Q7tWEAvxLZmSSlBp' },
  { driveId: '1iIyHFevRZm9HsISzB3wVl1mrNswjF0Eh' },
  { driveId: '1nLNrzpGqz22urQQBXGEXIj7dK0tPNZYy' },
  { driveId: '1YfB7QGwZct9UmGLCeyKg05v9-saIumhk' },
  { driveId: '1jppAn4FPIcfKeoPR4vqjOakkDqqh-mTv' },
  { driveId: '1o0UTFeF0G6GsjaRW9cZQ-SGOkIFgweJc' },
  { driveId: '1Vj9bewSHzr2T1EGlwMJuM0-lRRmwoLlZ' },
  { driveId: '1ZqqkiEM5oo102rFVkpILXlGmeUi0h2-2' },
  { driveId: '1_QEK1BkzUHTppDrGRSxcnOwX1wM-TCJ1' },
  { driveId: '13WpY-p-OUTZB1O51LIFJMD-0IEnrM_GN' },
  { driveId: '1IP7u3-Ug74KIchTiRAoY6h1JD4zlitie' },
  { driveId: '1AjJaEbRbS7zywlODYZvwqLmRzNfEiQVd' },
  { driveId: '13Mq4FFpj6roQPeTVWp2nitbt66D1HoU4' },
  { driveId: '1ZzEqzppW3rKxKHVhQebzWIC9SqSitKp-' },
  { driveId: '1h-lYo7hU1NnqeA4tTQvU8v9opmdHq0Cn' },
  { driveId: '1KbCj-dO-suqHz4RG8qVEY72gAtVZ7VX2' },
  { driveId: '1oSIJTQbF7KwvnDQuSX7LZUfahYdSYjIr' },
  { driveId: '1ftWTchhQOU-KdpcLyeHaQK72ra56MBBo' },
  { driveId: '15ahLhoZ1Wcm0lzPJv0BWlYW5616ormVY' },
  { driveId: '14YrL6o5Y5POVGJ-ogzQl_H5cjAn-cLkw' },
  { driveId: '1qkWhTuxgQCxagpWixMWweavDjHO9_h4J' },
  { driveId: '1mMMA2jFLKIsz6QHRvbvMCuUdMIQ_HYXM' },
  { driveId: '1j2p745uIKvADYTl5kt9ki-IKi4MgHakR' },
  { driveId: '1so1p07tBWKOZkHoFOL_JXOuyWK9_a2nD' },
  { driveId: '1goVP6QE00Njxp90H0Lc3kzpVLeaT4ltM' },
  { driveId: '1KlFHKqTiN82uood4Vz7qwogDlDQUVqe-' },
  { driveId: '1Uw-cUwVJUlOWep4F4wE-v8pHKpogOtXM' },
  { driveId: '1wUIUP-xBzt8SlBO44G8diRMWHZ7_5_PK' },
  { driveId: '1rl-C5fBCtPinCQQXaQWJSqeOoB88xHzX' },
  { driveId: '10LvPrG44pGuan6TqOu7q60yMgO4QYmBw' },
  { driveId: '1gvtLjm7YnUGFXlnc7k7LBdfBodnRM4SN' },
  { driveId: '12951G_dW2fnEb0RFbT_cuP5NGrYCg2LR' },
  { driveId: '1wDEdoyASNSEhIxyJZ7Rh5HOV-eRlS1hE' },
  { driveId: '1-Y7Na-l8lOyMnrD5hlKbZd9cbp4sZlct' },
  { driveId: '1-J8POvEpmSu4O_rLzYich4SFe7wtpUI6' },
  { driveId: '12T9oNPZqiPCTjecGTjCSfHEIoZzSiDm7' },
  { driveId: '12nSRXD5WG4GtOicsYJueJ3hqQKsxGLXE' },
  { driveId: '14-GjBWLEWR3Zeac_6kNs8hCowaqsqtbj' },
  { driveId: '14ikYu_A_NlsVnAwd8WSU7mZseea2zhkE' },
  { driveId: '15zgig_T2K9GMjeiERI-DUfMibyj_BuEv' },
  { driveId: '17PelFabmdw3EaV9IwUe8MUeLxlhSQX3g' },
  { driveId: '17l-7I_ipuS31bOYTKBPEOEFlpA_TGyDk' },
  { driveId: '17l2G6VYdXXL_MBHPdouvhbSYbFzV22k4' },
  { driveId: '180n_MhXhSqXfqarRB7RLZquagXjbeJT-' },
  { driveId: '1862VyRjl5n5uo5fdmnuU_cIugn4mCCMC' },
  { driveId: '18AsAxJAolhrkhWaSntHT33ZYFzML66pJ' },
  { driveId: '18BHMYsBFIajQ6cbqrOVkROJ-LJrXhesD' },
  { driveId: '18fJrcVU5qU62PwI0XM8AYPIaZU7MrLwW' },
  { driveId: '1AhAkhI0GCmL6shenHfP3FHuO0_YHxRKQ' },
  { driveId: '1BxZ4OxmJS9C_-aAF1VGfj34lfIFj_62K' },
  { driveId: '1C1bTkgeLCZ95VhHYOWILnjeDXvlinG3K' },
  { driveId: '1CPByh4HKNMt0UC74qMCRUQ6zNYo2EMfg' },
  { driveId: '1CWPN-vrxdD2AHWLjWdb80O9Mdv9qx5wy' },
  { driveId: '1Cr2o-DhLpiox0q4elQvQ-UCzLfsNlHSj' },
  { driveId: '1DIfC-BTOYofnfWeXKkO_y0l0ERtugahi' },
  { driveId: '1DWhylIf0xDJPkdImpOkT5kuylFWatiKK' },
  { driveId: '1E2Tu4n8ptrq5lp3NJmTPsY7wbm6NYdze' },
  { driveId: '1EC_NikZaF7WsWQxZNIJ_L1s-wBSv0I2G' },
  { driveId: '1EmPXbWDzV931uLWBIJsCmm03q3-KDwur' },
  { driveId: '1I2YZLgIrgJSODylYiXPVF_aK8a7uehQd' },
  { driveId: '1I5P00T9KDQ3AXBYVL071qL5EBnUq7hKD' },
  { driveId: '1IaEIKneqD5q0_S-087LR6Q8sQRr_uKUa' },
  { driveId: '1Itp0dQ2aMPqpqfemK7MjxciRjPX0lIa5' },
  { driveId: '1JA_WcNNnAZPV6-4e5pNqqyI4qRYKaFYM' },
  { driveId: '1Lc2tZw6UOp_CAmZ6h0wNIjJd_cfmhRqs' },
  { driveId: '1NMp1SfcQdi_HZ3_gS6LXu5mWXyuO0EFo' },
  { driveId: '1NuT_DOCVFeg-WIp78EKPmS0NCj7TvYCg' },
  { driveId: '1OJyfP9gIWG5ZRssrLtcW2Gtmw7GfMs6r' },
  { driveId: '1OkeAeAo2VTxj1lASkT14ytsL4fFww2Nv' },
  { driveId: '1PPMLMDzOuePiGCcdDFyZx-nASzcMRaki' },
  { driveId: '1QOB4uLGA7wP2uaCvxY2v4l3SS9dWm1Aj' },
  { driveId: '1QZYkqBF6OSZD9rZ4DpPDfPJXYg9WQ8f4' },
  { driveId: '1RKLm1E7vCz3gm95DglL0jkbYb2Fyud_U' },
  { driveId: '1Rm4vHt_dpK3sMFQRngdCgt_NVyf4kwiS' },
  { driveId: '1Rs7ExFde5hCtJIB9glQU4eAutN_ajxB4' },
  { driveId: '1RvWjeb1GaXqI4UwM4t6jjDQteAUaLlAc' },
  { driveId: '1SLQcQzDK3pGRhwORkRYGZDzJkkn43ac1' },
  { driveId: '1SXI4DKnEpCLeZFIPRbyLdpNgZsZd-oVu' },
  { driveId: '1Ss-71L0JNU4fcVh0bgw3FXRn6yScvNZN' },
  { driveId: '1TOFopRbk3gjzueehEyW_WOREP0qaFVPU' },
  { driveId: '1TuTfjqmF_LdRx9VdtwXY0efzuzvOvG9V' },
  { driveId: '1U1WUM7q2hgh09UJYoDL5AY3OhKgeBMdj' },
  { driveId: '1VXMJKMUwf2AIgAbXqPZ_tlqwLqcOttTP' },
  { driveId: '1WjBDxPIxMTYO4czasPGMF62Dbm-AB4IQ' },
  { driveId: '1WpLA6c0VivtrQ4WMEU1U6xx67u1bRNET' },
  { driveId: '1YRl_esoqgNyHJOSAAaO1nu9hVPqc0xle' },
  { driveId: '1ZSz5D6e-CdoG-hem1s-cZJkQn4UIhRcG' },
  { driveId: '1ZuVFL2Mi_vpKORBYdn4mVrB1hWP07h3q' },
  { driveId: '1_751LlBsjfFMR83SFTi-VISedVBcjqEz' },
  { driveId: '1_gzr3syqDF3IQPWEQmGF_Zxjx6qXEwDb' },
  { driveId: '1a9hWOgPdYTapDYdrv2AfBwdoG9k5xG2c' },
  { driveId: '1aY6E1k_fHRUN9O6d6OiCkPItaOqRWZ5j' },
  { driveId: '1abpB52NHvlRY08ta-NQHznfX9xaXTgk9' },
  { driveId: '1bjO79wZV8sKzM3h31E13uv6hzdWHGwtW' },
  { driveId: '1cGBi0fS28sjKwkodGyDdbYtYtQe0Ofef' },
  { driveId: '1cpL_4W_WMB5APnVRq19cJA9WkDb9pISW' },
  { driveId: '1d91jwtgDoqOSpOYMmZuL35D1oE1vFN1S' },
  { driveId: '1dLqoFfV05As_nswrtmXVWa5QplObXvsN' },
  { driveId: '1d_46Ma0x9SS2QBkQGzFX-Og-F8SHr4Qe' },
  { driveId: '1eo7C5x20tkRhBiPEwpJBpONH6cXvOGyJ' },
  { driveId: '1fad994VE_OXDAOP_2QyGcawN5esRK050' },
  { driveId: '1haPpMpmWCs_Te6fOI-UU1gKrBhRrMNL0' },
  { driveId: '1iTJGeIDbhdZExRLEfTX2kEsblp7Ju79L' },
  { driveId: '1lG3N0blWBILXA84wGwTc1sO0qjGqwnMb' },
  { driveId: '1lJ8_Y1l_LHX3D-Hm9d9dwMscwoPolMBs' },
  { driveId: '1mu-Vr_yOc4xdw102ktV5DnJPfZpATSko' },
  { driveId: '1niUg3XkGWNYwkiRHaW7cm7OuqfSz6TWz' },
  { driveId: '1oXSyrpxxk6rDNJxtEaMxsDcd5hSvDmuY' },
  { driveId: '1p0_SLJn6Zmpgj0rQ3l7XHLbBM-5bB5No' },
  { driveId: '1pVBfs0sTlXN6_CqZ0Jbq_Q7--MLCDh8i' },
  { driveId: '1pjvp_PxtxXjuSl3W4tBDm0XxUicOtcD3' },
  { driveId: '1qmWk-hQ19gkUl3PEOsKQYRm9f-xkB-sM' },
  { driveId: '1rc8Cv8DtVxb1vZB8Kqjzz1aGwZJHg3Gd' },
  { driveId: '1uCHAfqeGIpfambRtS67XfYGOXiJMPnGz' },
  { driveId: '1uome2hiuAXB1cCaUdeBJPxN4USQwRV8K' },
  { driveId: '1vV5Jd51fVKee9wTuhXpirBrD989w8b9P' },
  { driveId: '1vqU5ES57LmrhsgNxkQDcvB3TRm5NdquH' },
  { driveId: '1vsgprCvT-u556jTkZ0WFCTLKLMiPtgh_' },
  { driveId: '1x17cmazi8aP-UpUViUVrnhhAtVjxlvt7' },
  { driveId: '1xdoMD7yLuMHN5JVWt20l1L1yBnDWBXzh' },
  { driveId: '1yIPEKN_ODOpAzxFlvHA0HvPzIGnQG5BG' },
  { driveId: '1zFug5-eOYwNUo5hu8GyFvRMo8Zz4t0_9' },
  { driveId: '10BchwcyVfMHzjEnqGDiyHiNSbUOAg_Bt' },
  { driveId: '10IQQZwut6sZJF3jBanMkMfvzEr_Czaj9' },
  { driveId: '10RBdfQquLHFjFWxxuh-TNF-8mx5-cDE1' },
  { driveId: '10eoj86ZkXZT8X7K8mB5XtxLp0pcIDLrq' },
  { driveId: '11rHYi2qdYApXtQCKHVjadcp8lgLuzTzE' },
  { driveId: '13bhjageIA7r8AufUpqonklc4C9R8DiUc' },
  { driveId: '14RFhCyHxsuEIOYAG9DvZnjQCnNVkjWjf' },
  { driveId: '14wyFxZBHZ4bqEVyy0B3LdUuivBG09lF5' },
  { driveId: '15Fx9X8LiqkRQQk_0-LWxtH2I69ehgdi6' },
  { driveId: '15kdQTVqfyTucamOcCkgi0EtPt35dXDVD' },
  { driveId: '18YWpCOXr1g2yZnngPg8w4YcMjQp7c-aP' },
  { driveId: '18ZgHwoLXzY4q1jv6629O-utq02pgXo8j' },
  { driveId: '1990GUquF7Tb9qgVP2yahjt8YxsQnpAAy' },
  { driveId: '19OSbWFWWrvuEQdT6uA0WFwAIDXqXAk11' },
  { driveId: '19TZ2aULyUuUI6__Rlj3o-OLwHn1hZiWc' },
  { driveId: '19ovjEn0T7V8XQI9NcNkUjHG5lE_BZxO4' },
  { driveId: '1CKzS6CFEjJ3PHky4PnQJTsUq2z3jsy7E' },
  { driveId: '1Ctv8K5BpciF6siPccYNAK_PRR-NX0qr2' },
  { driveId: '1D1gfpOtuWRRDY-pcMJvyHce52TWxQMoy' },
  { driveId: '1DNr6g6nrykK5l6RolaVZ8Y5l2PaFShVe' },
  { driveId: '1DzFBr3K4JzkNJwLd1ZMNQ2kA_XuvDzXz' },
  { driveId: '1HBQSNRtEH2z9-xJNggVHxtZO6mxgzPmn' },
  { driveId: '1HBphwIJYsBQw7iucNRhOlBknL0nkw7Vq' },
  { driveId: '1HEVJl1IT33ZHAoff3QugOCT173t0Knac' },
  { driveId: '1IDTXS6INvTs1bziwppZz7q6SY8oqt0bI' },
  { driveId: '1IIz3O06QooTpHytHQzu0H-8XLXYG3eCI' },
  { driveId: '1IXzmkpk0QLs0yS_PpNHYURUzJTI67dbU' },
  { driveId: '1J1BCz3pLp7gqkFbWhGHZwfAyaVf0U2i4' },
  { driveId: '1J2i8PTfQD-19k9Ra9OO5rt0Dz8-QUJoe' },
  { driveId: '1K5uu0YtEPoytRT8EnVY4-VtRICJKfJdJ' },
  { driveId: '1LWlIMCeHzw_odYOtIObFBSjTPTlayig3' },
  { driveId: '1LuXLrDcTJUzv2iHKz0VqSmglJyFiYWrA' },
  { driveId: '1OIYb_6Fe4aopPqSJiOu3tU3YgMsDl1z9' },
  { driveId: '1P5wAEKa_avcFo6WfTfBnxGQ4HKLx2lOp' },
  { driveId: '1P8K2xeQZCDCeGMmZZW9owEFZaV6vyiAa' },
  { driveId: '1QvY8TAP0sz_a81nh1UFgb7z3DbqQvlc4' },
  { driveId: '1RD2XcBhVSz3Cdp270CJHLxC3HvgzErS8' },
  { driveId: '1RDYuY95Z07zFfNSn8KlO2-mThPxnI9pz' },
  { driveId: '1SNxAmPVPNmLUTIc9CaToaSVSKUabSkjD' },
  { driveId: '1Ss1W3zTGrmDUYhV3kdDtwOjSenVNv-wN' },
  { driveId: '1St5Zk_g3d-FIs1PwxMB3X09tSOPir3Pd' },
  { driveId: '1TMM2igeYYk5lcmdWkzAiPrTiMOYik8ON' },
  { driveId: '1Tdnzus1_G8BpwpHt74iiVQbVfQ57xSWM' },
  { driveId: '1ToXYKt_BlOC5ZB00H7MqIyFeKzEB1k7Q' },
  { driveId: '1UJCBpgbnvtvsHc9BUwdRPtGk_h1QYGqq' },
  { driveId: '1WXlXFOPkTOpUNnhHFmu2de1YJo7gAQjj' },
  { driveId: '1YVIlFoB5FuT08iwZst0bJTs8RSLRp1R_' },
  { driveId: '1Ye_0yMaz11Sq3xFSCO6XMEIA_jkmuVP-' },
  { driveId: '1_4NJi-uC-YN4uMFwov-DOpfMOY0FSAM4' },
  { driveId: '1_C0wTDFoCAloDAP68ykMutiK9dVWBqN7' },
  { driveId: '1_s3lScYdFHzJvjXkmGGnL7wbfIaibnh_' },
  { driveId: '1azGAlbcWfE5BD-2iF9TILbNQyROw-J1z' },
  { driveId: '1bfcsxNpvid-laDekVhw1atugslNliw1-' },
  { driveId: '1bmiMQnDE5w_ED-X5ndB9hxQQWsrLXdRb' },
  { driveId: '1c7sKXbrC_OtF7C2x79KzYXgG-DatYeFk' },
  { driveId: '1dNn8Rmx7IzqglKOA0Ha3ema6BLrIC7JP' },
  { driveId: '1dgtZx3WirGuvxAL3uK50s0HBLVM7HCaX' },
  { driveId: '1eq7BoPzlDRGeyGMSa3gYzeph7oxt3Ngv' },
  { driveId: '1fZKYMvtoyOPvoTSMmoKJriRClNFnHEUt' },
  { driveId: '1flg86GGpcuul3V_TWk8W3wrXz-wSSTX8' },
  { driveId: '1gGPLDyVFMDCNx4zKAS_SRhc0ukUYReDl' },
  { driveId: '1gXOWBRC_ABYFEWwC3B8wxGdt-PS7D2Z8' },
  { driveId: '1gd36AKaudulKqaFA9L1t8l-cqsd_qAwq' },
  { driveId: '1hXJBcMrkpIujaGGbJJ4NKcPzTPjc0wlz' },
  { driveId: '1hnK6AzV7GFqy6VTK3jSYU7fIrafTnr6D' },
  { driveId: '1j0U4H8CPNNRQ1HBz_r6H0QTaGw6sQMn4' },
  { driveId: '1j8bu4HI-pT3nnbj5ZrAs77yjUXszPf_t' },
  { driveId: '1jrzpRp2PRmbIKVmUFNhnyzj3lXzYUdCt' },
  { driveId: '1k2JLX43Qdr3TFO4TZYRizwmJNPMyVVz7' },
  { driveId: '1kA89yUHhcNjv9uPTyk5BbKVfYxAOSekk' },
  { driveId: '1kzS_NoreKm_CtmibR_PTHYrb2LzkE1_Q' },
  { driveId: '1lOFxEoG0prhIJTNy_RbpFQRfe2mucnyx' },
  { driveId: '1mjyQfdKEtRMTTwNApvAvo2Ft6QmD-2jA' },
  { driveId: '1moMTQv2qw0gWXaKh8UqUWw7-R_RXl9K7' },
  { driveId: '1n2JQtXW6QbGaPEQFKsh4vosb7fXPYKrE' },
  { driveId: '1n4rotxz7FntiwyG5Eufae_ARI_nUOoop' },
  { driveId: '1oAHDKMExIY2mUcsWbc3wDpg3MGG7RBE7' },
  { driveId: '1qAPxOT_n2d9iX2TPmAIS0toTcRnKm0wM' },
  { driveId: '1qFr9ZzzYvtA0zgDwPX2BBkdileOkTWzb' },
  { driveId: '1qjOlU934fkc4HAtuetNpUX19LXtVBz_I' },
  { driveId: '1rQtq-70k97izEvE6y4Kovr0EFOYiLY1i' },
  { driveId: '1s1-uH74zJUd_qzjjuDGZgTJVLlNie0rU' },
  { driveId: '1s7uMA27jRSlYpt24qpwq2nIcWxpJTIcc' },
  { driveId: '1sNIbda4lxHi2RoIHKnwTLHZbhHkZ_es-' },
  { driveId: '1sQGF0kXrBdXM6U8L7GSBNGyg-z7thn60' },
  { driveId: '1tH8Bzkur3Sy9_mlaGextJ_mA5s1800VP' },
  { driveId: '1u3nzyvuJt94D3APSGQiTVo7XEtmTooIw' },
  { driveId: '1wEV46iiRnkCfEYEjYFM_cgGhJXuYiPak' },
  { driveId: '1wTbx0GxX_cpP97C3figlZjH5_ubcW0uR' },
  { driveId: '1wZGeHOnjhTO8-ts5eUnH0SP5_sI_-mhN' },
  { driveId: '1wygDlDqxBi3_zqJhD4ySq3aKnLLX_HML' },
  { driveId: '1wyjUJh_0t2lp_WCzvWt9hHu36RlQGjW5' },
  { driveId: '1xzJds9GGHhF-zKjCVJ8jz1fXBfp9sPU1' },
  { driveId: '1zeBsLAYuJ9Cd_V_wSVUBnydJ5MBsUjSI' },
];

/* ============================================================
   AYUDANTES DE DRIVE — generan los enlaces sin exponer la
   interfaz de Drive: portada, visor embebido y descarga directa.
   ============================================================ */
const driveThumb     = (id, w=400) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
const drivePreview   = (id) => `https://drive.google.com/file/d/${id}/preview`;
const driveDownload  = (id) => `https://drive.google.com/uc?export=download&id=${id}`;

/* ============================================================
   AYUDANTES DE LIBRO — resuelven portada / visor / descarga sin
   importar si el libro es de Drive o un archivo local.
   ============================================================ */
function libroPortada(libro){
  if(libro.portada) return libro.portada;          // portada propia (cuando la agregues)
  if(libro.driveId) return driveThumb(libro.driveId, 500); // miniatura automática de Drive
  return null;                                      // archivo local sin portada → ícono genérico
}
function libroVisor(libro){
  return libro.archivo ? libro.archivo : drivePreview(libro.driveId);
}
function libroDescarga(libro){
  return libro.archivo ? libro.archivo : driveDownload(libro.driveId);
}
function libroEsDrive(libro){
  return !libro.archivo && !!libro.driveId;
}

/* Resuelve la imagen de una foto de la galería: prioriza Drive (driveId)
   y usa la ruta local (src) solo si no hay driveId, por compatibilidad. */
function galeriaSrc(item, w=400){
  if(item.driveId) return driveThumb(item.driveId, w);
  return item.src;
}
