
const questions = {
  'basic-type': {
      category: 'basic',
      formType: 'radio',
      title: 'questions.basic-type.title',
      description: '',
      options: [
        {
          title: 'questions.basic-type.options.title_1',
          value: 1,
        },
        {
          title: 'questions.basic-type.options.title_2',
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
    'basic-other': {
      category: 'basic',
      formType: 'radio',
      title: '他のご事業のご状況をご選択ください。',
      description: '',
      options: [
        {
          title: '他に経営中の事業は特にない',
          value: 1,
        },
        {
          title: '他に代表を務める法人がある',
          value: 2,
        },
        {
          title: '個人事業主として開業している',
          value: 3,
        },
        {
          title: '過去に法人の代表を務めていたことがある',
          value: 4,
        },
        {
          title: '過去に個人事業主として開業していたことがある',
          value: 5,
        },
      ],
      next: 'basic-desired',
    },
    'basic-desired': {
      category: 'basic',
      formType: 'radio',
      title: '創業融資での調達希望金額をご選択ください。',
      description: '',
      options: [
        {
          title: '100〜300万円',
          value: 1,
        },
        {
          title: '300〜500万円',
          value: 2,
        },
        {
          title: '500〜800万円',
          value: 3,
        },
        {
          title: '800〜1,000万円',
          value: 4,
        },
        {
          title: '1,000〜1,500万円',
          value: 5,
        },
        {
          title: '1,500〜2,000万円',
          value: 6,
        },
        {
          title: '2,000万円以上',
          value: 7,
        },
      ],
      next: 'basic-guarantee',
    },
    'basic-guarantee': {
      category: 'basic',
      formType: 'radio',
      title:
        '経営者保証の有無に関して、現時点のお考えに合うものをご選択ください。',
      description:
        '（経営者保証とは、法人の借入に対して代表者個人が負う連帯保証のことを指しています。「代表者保証」と同義です。）',
      options: [
        {
          title: '経営者保証がついてもかまわない',
          value: 1,
        },
        {
          title: 'できれば経営者保証がない制度で調達したい',
          value: 2,
        },
        {
          title: '経営者保証がない制度のみで調達したい',
          value: 3,
        },
        {
          title: 'わからない',
          value: 4,
        },
      ],
      next: 'experience-relation',
    },
    // ===experience===
    'experience-relation': {
      category: 'experience',
      formType: 'radio',
      title:
        'これから起業する事業（既に起業されている場合には起業済みの事業）と、起業までの主な職歴との関連性はありますでしょうか？',
      description: '下記より当てはまるものをご選択ください。',
      options: [
        {
          title:
            'これまでの職歴とまったく関係のない領域の事業で起業する（した）。',
          value: 1,
        },
        {
          title:
            'これまでの職歴と関連性は関連のある領域の事業で起業する（した）。',
          value: 2,
        },
        {
          title: 'これまでの職歴と同じ事業で起業する（した）。',
          value: 3,
        },
      ],
      next: 'experience-year',
    },
    'experience-year': {
      category: 'experience',
      formType: 'radio',
      title:
        'これから起業する事業（既に起業されている場合には起業済みの事業）と関連のある職歴の経験年数をご選択ください。',
      description: '',
      options: [
        {
          title: '0〜1年未満',
          value: 1,
        },
        {
          title: '1〜3年未満',
          value: 2,
        },
        {
          title: '3〜5年未満',
          value: 3,
        },
        {
          title: '5〜7年未満',
          value: 4,
        },
        {
          title: '7年以上',
          value: 5,
        },
      ],
      next: 'experience-career',
    },
    'experience-career': {
      category: 'experience',
      formType: 'input',
      title: 'ご職歴（会社名および職務内容）をご入力ください。',
      description: '複数社ある場合には［追加］をクリックしてご追加ください。',
      next: 'experience-document',
    },
    'experience-document': {
      category: 'experience',
      formType: 'radio',
      title:
        '融資申込前年の代表者のご収入を示す書類（源泉徴収票・確定申告書等）はありますでしょうか？',
      description: '',
      options: [
        {
          title: 'ある',
          value: 1,
        },
        {
          title: 'ない',
          value: 2,
        },
      ],
      next: 'experience-income',
    },
    'experience-income': {
      category: 'experience',
      formType: 'radio',
      title: '融資申込前年の代表者個人のおよその年収をご選択ください。',
      description: '',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~300万円',
          value: 2,
        },
        {
          title: '300〜500万円',
          value: 3,
        },
        {
          title: '500〜1,000万円',
          value: 4,
        },
        {
          title: '1,000万円以上',
          value: 5,
        },
      ],
      next: 'experience-balance',
    },
    'experience-balance': {
      category: 'experience',
      formType: 'radio',
      title: '代表者の個人的なお借入の残高をご選択ください。',
      description: '（住宅ローンを除きます。）',
      options: [
        {
          title: 'ない',
          value: 1,
        },
        {
          title: '50万円未満',
          value: 2,
        },
        {
          title: '50万円以上100万円未満',
          value: 3,
        },
        {
          title: '100万円以上',
          value: 4,
        },
      ],
      next: 'experience-loan',
    },
    'experience-loan': {
      category: 'experience',
      formType: 'radio',
      title:
        '代表者の個人的なお借入の返済状況について当てはまるものをご選択ください。',
      description: '',
      options: [
        {
          title: '返済が遅れたことはない（または借入自体がない）',
          value: 1,
        },
        {
          title: '過去に何度か遅れたことがある',
          value: 2,
        },
        {
          title: '3ヶ月以上返済が遅れたことがある',
          value: 3,
        },
        {
          title: '債務整理をしたことがある',
          value: 4,
        },
        {
          title: '自己破産をしたことがある',
          value: 5,
        },
      ],
      next: 'experience-payment',
    },
    'experience-payment': {
      category: 'experience',
      formType: 'radio',
      title:
        '代表者個人の公共料金等の支払いについて当てはまるものをご選択ください。',
      description:
        '（日本国内での家賃・携帯代・電気・ガス・水道等の支払い状況についてご回答ください。）',
      options: [
        {
          title: '自分の名義で直近3ヶ月以上遅れなく支払われている',
          value: 1,
        },
        {
          title: '自分の名義だが一部支払いに遅れがある',
          value: 2,
        },
        {
          title: '自分の名義でないものがある',
          value: 3,
        },
      ],
      next: 'experience-tax',
    },
    'experience-tax': {
      category: 'experience',
      formType: 'radio',
      title: '代表者個人の税金等の未納について当てはまるものをご選択ください。',
      description: '',
      options: [
        {
          title: '住民税等の公的な支払いに未納はない',
          value: 1,
        },
        {
          title: '住民税等の公的な支払いに未納がある',
          value: 2,
        },
      ],
      next: 'capital-preparation',
    },
    // ===capital===
    'capital-preparation': {
      category: 'capital',
      formType: 'radio',
      title: '創業時点の資本金の額（資本準備金を含む）をご選択ください。',
      description: '（個人事業主の場合には、創業までに準備してきた資金の額）',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~300万円',
          value: 2,
        },
        {
          title: '300〜500万円',
          value: 3,
        },
        {
          title: '500〜1,000万円',
          value: 4,
        },
        {
          title: '1,000万円以上',
          value: 5,
        },
      ],
      next: 'capital-asset',
    },
    'capital-asset': {
      category: 'capital',
      formType: 'radio',
      title:
        '創業時点の資本金・資本準備金のうち、創業までに代表者自身が準備してきた資金の額をご選択ください。',
      description:
        '（法人の場合には法人設立までに、個人事業主の場合には開業までに代表者自身が準備した資金の合計）',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~300万円',
          value: 2,
        },
        {
          title: '300〜500万円',
          value: 3,
        },
        {
          title: '500〜1,000万円',
          value: 4,
        },
        {
          title: '1,000万円以上',
          value: 5,
        },
      ],
      next: 'capital-balance',
    },
    'capital-balance': {
      category: 'capital',
      formType: 'radio',
      title: '現時点の事業資金の残高をご選択ください。',
      description: '',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~300万円',
          value: 2,
        },
        {
          title: '300〜500万円',
          value: 3,
        },
        {
          title: '500〜1,000万円',
          value: 4,
        },
        {
          title: '1,000万円以上',
          value: 5,
        },
      ],
      next: 'capital-individual',
    },
    'capital-individual': {
      category: 'capital',
      formType: 'radio',
      title:
        '前出の資本金・自己資金・事業資金とは別に保有している個人資産の総額をご選択ください。',
      description:
        '（事業に使うか否かに関わらず、預金・上場株式・投資信託等、第三者がエビデンスが確認できる金融資産があると、融資審査においてプラスに作用する場合があります。）',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~300万円',
          value: 2,
        },
        {
          title: '300〜500万円',
          value: 3,
        },
        {
          title: '500〜1,000万円',
          value: 4,
        },
        {
          title: '1,000万円以上',
          value: 5,
        },
      ],
      next: 'plan-detail',
    },
    // ===plan===
    'plan-detail': {
      category: 'plan',
      formType: 'input',
      title: 'ご事業内容をご記入ください。',
      description: '',
      next: 'basic-address',
    },
    'basic-address': {
      category: 'plan',
      formType: 'input',
      title: '主たる事業（予定）地の都道府県までをご記入ください。',
      description:
        '（既に法人登記している場合には本店所在地、個人事業主として開業している場合には事業所所在地の都道府県をご記入ください。）',
      next: 'plan-service',
    },
    // 'plan-customer': {
    //   category: 'fund',
    //   formType: 'input',
    //   title: '顧客は誰か、ターゲットをご記入ください。',
    //   description: '',
    //   next: 'plan-price',
    // },
    // 'plan-price': {
    //   category: 'fund',
    //   formType: 'input',
    //   title: 'およその客単価をご記入ください。',
    //   description: '',
    //   next: 'plan-service',
    // },
    'plan-service': {
      category: 'plan',
      formType: 'radio',
      title:
        'サービス・プロダクトに関する現時点のご状況として当てはまるものをご選択ください。',
      description: '',
      options: [
        {
          title:
            '既に商品・サービス・プロダクトを顧客に提供し、月商100万円以上の売上が立っている',
          value: 1,
        },
        {
          title:
            '既に商品・サービス・プロダクトを顧客に提供し、売上が立っている',
          value: 2,
        },
        {
          title: '既に商品・サービス・プロダクトを顧客に提供している',
          value: 3,
        },
        {
          title: '既に商品・サービス・プロダクトを顧客に提供できる状態にある',
          value: 4,
        },
        {
          title: '3ヶ月以内に商品・サービス・プロダクトを提供できる状態にある	',
          value: 5,
        },
        {
          title: '商品・サービス・プロダクトを提供できる見込みは今のところない',
          value: 6,
        },
      ],
      next: 'plan-equipment',
    },
    'plan-equipment': {
      category: 'plan',
      formType: 'radio',
      title:
        '店舗・工場・その他機器・機材等に関する設備資金の必要性について当てはまるものをご選択ください。',
      description: '（WEBサイトや業務システムを含む）',
      options: [
        {
          title: '設備資金を必要としない',
          value: 1,
        },
        {
          title: '100万円未満の設備資金必要',
          value: 2,
        },
        {
          title: '100〜300万円の設備資金必要',
          value: 3,
        },
        {
          title: '300〜500万円の設備資金必要',
          value: 4,
        },
        {
          title: '500〜1,000万円の設備資金必要',
          value: 5,
        },
        {
          title: '1,000万円以上の設備資金必要',
          value: 6,
        },
      ],
      next: 'plan-sales-three',
    },
    'plan-sales-three': {
      category: 'plan',
      formType: 'radio',
      title: '直近3ヶ月の月平均売上高（実績値）をご選択ください。',
      description: '（これから起業の場合には起業後3ヶ月の見込み）',
      options: [
        {
          title: '0〜10万円',
          value: 1,
        },
        {
          title: '10~50万円',
          value: 2,
        },
        {
          title: '50〜100万円',
          value: 3,
        },
        {
          title: '100〜300万円',
          value: 4,
        },
        {
          title: '300〜500万円',
          value: 5,
        },
        {
          title: '500〜1,000万円',
          value: 6,
        },
        {
          title: '1,000万円以上',
          value: 7,
        },
      ],
      next: 'plan-cost-three',
    },
    'plan-cost-three': {
      category: 'plan',
      formType: 'radio',
      title: '直近3ヶ月の月平均支出月額（実績値）をご選択ください。',
      description: '（これから起業の場合には起業後3ヶ月の見込み）',
      options: [
        {
          title: '0〜10万円',
          value: 1,
        },
        {
          title: '10~50万円',
          value: 2,
        },
        {
          title: '50〜100万円',
          value: 3,
        },
        {
          title: '100〜300万円',
          value: 4,
        },
        {
          title: '300〜500万円',
          value: 5,
        },
        {
          title: '500万円以上',
          value: 6,
        },
      ],
      next: 'plan-sales-six',
    },
    'plan-sales-six': {
      category: 'plan',
      formType: 'radio',
      title: '将来6ヶ月後の目標月平均売上高（見込み）をご選択ください。',
      description: '（これから起業の場合には起業から6ヶ月後の見込み）',
      options: [
        {
          title: '0〜10万円',
          value: 1,
        },
        {
          title: '10~50万円',
          value: 2,
        },
        {
          title: '50〜100万円',
          value: 3,
        },
        {
          title: '100〜300万円',
          value: 4,
        },
        {
          title: '300〜500万円',
          value: 5,
        },
        {
          title: '500万円以上',
          value: 6,
        },
      ],
      next: 'plan-cost-six',
    },
    'plan-cost-six': {
      category: 'plan',
      formType: 'radio',
      title: '将来6ヶ月後の目標月平均支出月額（見込み）をご選択ください。',
      description: '（これから起業の場合には起業から6ヶ月後の見込み）',
      options: [
        {
          title: '0〜10万円',
          value: 1,
        },
        {
          title: '10~50万円',
          value: 2,
        },
        {
          title: '50〜100万円',
          value: 3,
        },
        {
          title: '100〜300万円',
          value: 4,
        },
        {
          title: '300〜500万円',
          value: 5,
        },
        {
          title: '500万円以上',
          value: 6,
        },
      ],
      next: 'basic-company',
    },
    // ===specific===
    'specific-sales': {
      category: 'plan',
      formType: 'radio',
      title:
        '既に1期目を終えている場合、1期目の決算書の売上高（年商）をご選択ください。',
      description: '（1期目を終えても決算を終えていない場合には、着地見込み）',
      options: [
        {
          title: '100万円未満',
          value: 1,
        },
        {
          title: '100~500万円',
          value: 2,
        },
        {
          title: '500〜1,000万円',
          value: 3,
        },
        {
          title: '1,000〜3,000万円',
          value: 4,
        },
        {
          title: '3,000万円以上',
          value: 5,
        },
      ],
      next: 'specific-acount',
    },
    'specific-acount': {
      category: 'plan',
      formType: 'radio',
      title:
        '既に1期を終えている場合、1期目の決算書の営業利益または営業損失の額をご選択ください。',
      description: '（1期目を終えても決算を終えていない場合には、着地見込み）',
      options: [
        {
          title: '100万円以上の赤字',
          value: 1,
        },
        {
          title: '100万円未満の赤字',
          value: 2,
        },
        {
          title: '100万円未満の黒字',
          value: 3,
        },
        {
          title: '100〜500万円の黒字',
          value: 4,
        },
        {
          title: '500〜1,000万円の黒字',
          value: 5,
        },
        {
          title: '1,000万円以上の黒字',
          value: 6,
        },
      ],
      next: 'basic-company',
    },
    'basic-company': {
      category: 'plan',
      formType: 'input',
      title: '会社名または屋号をご記入ください。',
      description:
        '（法人の場合には「株式会社◯◯」など法人種別がわかるよう正式名称をご記入ください）',
      next: 'basic-name',
    },
    'basic-name': {
      category: 'plan',
      formType: 'input',
      title: 'お名前をご記入ください。',
      description: '',
      next: 'basic-email',
    },
    'basic-email': {
      category: 'plan',
      formType: 'input',
      title: 'メールアドレスをご記入ください。',
      description: '※創業融資等に関する最新情報をお届けします。',
      next: null,
    },
}

export default questions;