export interface FaqItem {
  question: string
  answer: string
}

export const faqContent = {
  title: 'Preguntas frecuentes',
  items: [
    {
      question: '¿El plan Free es realmente gratis?',
      answer:
        'Sí. Pides tu LinkTree por WhatsApp, llenas un formulario corto y nuestro equipo crea tu cuenta. No pagas nada ni dejas una tarjeta.',
    },
    {
      question: '¿Cómo paso del Free al Básico?',
      answer:
        'Escríbenos desde el botón de tu panel o por WhatsApp. Tus enlaces, redes y clics registrados se conservan, y el sello desaparece de tu página.',
    },
    {
      question: '¿Necesito conocimientos técnicos?',
      answer:
        'No. Todo se edita desde el panel en español: arrastrar, escribir y guardar. El alta inicial la hace nuestro equipo.',
    },
    {
      question: '¿Puedo probar las funciones de otros planes antes de pagarlas?',
      answer:
        'Sí. Se ven en el panel con su distintivo y en Diseño las pruebas en vivo en el celular de vista previa. Solo al guardar aparece el aviso del plan que las incluye.',
    },
    {
      question: '¿Qué son las plantillas?',
      answer:
        'Diseños listos para tu página. Los ves con tus propios datos antes de publicarlos y puedes cambiar cuando quieras: tus fotos, enlaces y contactos se conservan. El catálogo sigue creciendo.',
    },
    {
      question: '¿Qué pasa con mi contenido si bajo de plan?',
      answer:
        'Nada se borra. La plataforma deja de mostrar lo que no incluye tu plan, pero la información queda guardada y vuelve al subir de plan.',
    },
    {
      question: '¿Los códigos QR impresos se vencen?',
      answer:
        'No. El QR apunta a tu dirección, así que puedes cambiar el contenido de la página las veces que quieras sin reimprimir nada.',
    },
    {
      question: '¿Mi página carga rápido con muchas fotos?',
      answer:
        'Sí. Cada imagen que subes se convierte automáticamente a WebP: una foto de 5 MB se sirve en menos de 150 KB.',
    },
    {
      question: '¿Puedo tener varias sucursales con contenido distinto?',
      answer:
        'Sí, con el módulo Vitrinas. Cada sucursal muestra sus propios enlaces y catálogos, heredando la identidad de la empresa matriz.',
    },
  ] satisfies readonly FaqItem[],
} as const
