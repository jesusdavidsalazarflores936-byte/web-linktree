export interface FaqItem {
  question: string
  answer: string
}

export const faqContent = {
  title: 'Preguntas frecuentes',
  items: [
    {
      question: '¿Necesito conocimientos técnicos?',
      answer:
        'No. Todo se edita desde el panel en español: arrastrar, escribir y guardar. El alta inicial la hace nuestro equipo.',
    },
    {
      question: '¿Puedo probar las funciones premium antes de pagarlas?',
      answer:
        'Sí. Están visibles en el panel y los cambios se ven en vivo en el celular de vista previa. Solo al guardar aparece el aviso de que es una función premium.',
    },
    {
      question: '¿Qué pasa con mi contenido si bajo de plan?',
      answer:
        'Nada se borra. La plataforma deja de mostrar lo premium, pero la información queda guardada y vuelve al reactivar el módulo.',
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
