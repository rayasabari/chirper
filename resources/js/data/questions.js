const questions = {
  'basic-type': {
    category: 'basic',
    formType: 'radio',
    title: '法人か個人事業主かをご選択ください。',
    description: '',
    options: [
      {
        title: '法人',
        value: 1,
      },
      {
        title: '個人事業主',
        value: 2,
      },
    ],
    next: 'basic-status',
  },
  'basic-status': {
    category: 'basic',
    formType: 'radio',
    title: '現時点の起業のご状況をご選択ください。',
    description: '',
    options: [
      {
        title: '起業はしばらく先',
        value: 1,
      },
      {
        title: '1年以内に起業する',
        value: 2,
      },
      {
        title: '既に個人事業主として起業している',
        value: 3,
      },
      {
        title: '既に法人を設立して1期目の途中',
        value: 4,
      },
      {
        title:
          '既に個人事業主または法人として起業し、1回以上決算（確定申告）を終えている',
        value: 5,
      },
    ],
    next: 'basic-other',
  },
}

export default questions;