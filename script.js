const baseStrings = {
  selectAsset: "Select", tradeNow: "Trade now", updatedAt: "Updated", languageCode: "EN", officialPartner: "Official partner"
};

const translations = {
  pt: {
    skip:"Ir para o conteúdo", language:"Escolher idioma", languageCode:"PT", openMenu:"Abrir menu", signIn:"Entrar", createAccount:"Criar conta", createMyAccount:"Criar minha conta", navMarkets:"Mercados", navPlatform:"Plataforma", navPayments:"Pagamentos", navSupport:"Suporte", navResponsibility:"Operação responsável",
    heroEyebrow:"OPÇÕES BINÁRIAS", heroTitle:"Quando você decidir<br /><em>se mover, comece aqui.</em>", heroDescription:"Uma plataforma de opções binárias para acompanhar ativos, definir a sua entrada e tomar decisões com as informações à vista.", howItWorks:"Ver como funciona", minEntry:"entrada mínima", demo:"Demo", demoFact:"pratique antes de operar", assets:"Ativos", assetsFact:"em uma única plataforma", platformLabel:"PLATAFORMA", entryMinimum:"Entrada mínima", practiceEnvironment:"Ambiente de prática", demoAccount:"Conta demo", heroFootOne:"Movimentos de mercado exigem atenção.", heroFootTwo:"Opções binárias envolvem risco.",
    marketsEyebrow:"MERCADOS", marketsTitle:"Mercados em uma<br /><em>única plataforma.</em>", marketsDescription:"Moedas, criptoativos, índices e commodities para você selecionar, acompanhar e operar a partir da mesma interface.", marketsMoving:"MERCADOS EM MOVIMENTO", demoIndicators:"Indicadores demonstrativos", filterAll:"Todos", filterCurrencies:"Moedas", filterCrypto:"Cripto", filterIndices:"Índices", filterCommodities:"Commodities", marketDisclaimer:"Valores ilustrativos e sujeitos a alteração. Não constituem recomendação de operação.",
    chooseAsset:"Escolha o ativo", defineEntry:"Defina a entrada", platformEyebrow:"A PLATAFORMA", experienceTitle:"Uma interface feita<br /><em>para operar.</em>", experienceDescription:"Da seleção do ativo ao acompanhamento do gráfico, cada tela foi organizada para que você tenha a leitura necessária antes da sua decisão.", stepOneTitle:"Encontre o ativo", stepOneText:"Uma seleção organizada para você chegar ao que procura.", stepTwoTitle:"Defina o valor", stepTwoText:"Você pode começar com uma entrada a partir de US$ 1.", stepThreeTitle:"Opere com consciência", stepThreeText:"A decisão é sua. A plataforma deixa as informações à vista.", exploreDemo:"Conhecer a conta demo",
    paymentsEyebrow:"PAGAMENTOS", paymentsTitle:"Métodos que acompanham<br /><em>a sua conta.</em>", paymentsDescription:"Veja, na área de pagamentos, os métodos liberados para a sua região antes de fazer um depósito ou solicitar um saque.", cards:"Cartões", cardsText:"Use cartões de crédito ou débito quando este método estiver habilitado para a sua conta.", transfers:"Transferências", transfersText:"Confira as opções bancárias e os dados necessários diretamente na área de pagamentos.", wallets:"Carteiras digitais", walletsText:"Tenha visibilidade sobre as carteiras compatíveis com a sua localização.", cryptoassets:"Criptoativos", cryptoassetsText:"Veja os ativos aceitos e as instruções de rede antes de confirmar uma movimentação.", paymentNotice:"A disponibilidade de cada método depende da região, da conta e das verificações aplicáveis.",
    you:"Você", now:"Agora", supportEyebrow:"SUPORTE", supportTitle:"Ajuda para cada<br /><em>próxima etapa.</em>", supportDescription:"Encontre orientações para acessar a conta, usar a plataforma e consultar pagamentos antes de tomar uma ação.", supportQuestion:"Preciso confirmar um método de pagamento. Onde encontro essa informação?", supportAnswer:"Na sua conta, abra Pagamentos para consultar os métodos habilitados e as instruções antes de movimentar valores.", supportThanks:"Entendi. Obrigado.", responsibleLink:"Operação responsável", responsibilityEyebrow:"OPERE COM RESPONSABILIDADE", responsibilityTitle:"Uma boa decisão começa<br />por saber o que está em jogo.", responsibilityDescription:"Opções binárias envolvem risco e podem resultar na perda do valor investido. Antes de operar, entenda o funcionamento do produto, use a conta demo e escolha valores compatíveis com a sua realidade.", openDemo:"Abrir conta demo", footerRisk:"Opções binárias envolvem risco. Não opere valores que você não pode perder.", privacy:"PRIVACIDADE", cookieTitle:"Sua navegação, suas escolhas.", cookieText:"Usamos cookies essenciais para manter o site seguro e lembrar as suas preferências. Você pode aceitar todos ou seguir apenas com os essenciais.", essentialOnly:"Só essenciais", acceptAll:"Aceitar todos", selectAsset:"Selecionar", tradeNow:"Negociar agora", updatedAt:"Atualizado"
  },
  fr: {
    skip:"Aller au contenu", language:"Choisir la langue", languageCode:"FR", openMenu:"Ouvrir le menu", signIn:"Se connecter", createAccount:"Créer un compte", createMyAccount:"Créer mon compte", navMarkets:"Marchés", navPlatform:"Plateforme", navPayments:"Paiements", navSupport:"Assistance", navResponsibility:"Trading responsable",
    heroEyebrow:"OPTIONS BINAIRES", heroTitle:"Quand vous décidez<br /><em>de bouger, commencez ici.</em>", heroDescription:"Une plateforme d’options binaires pour suivre les actifs, définir votre entrée et décider avec les informations essentielles sous les yeux.", howItWorks:"Voir comment ça marche", minEntry:"entrée minimale", demo:"Démo", demoFact:"s’entraîner avant de trader", assets:"Actifs", assetsFact:"sur une seule plateforme", platformLabel:"PLATEFORME", entryMinimum:"Entrée minimale", practiceEnvironment:"Espace d’entraînement", demoAccount:"Compte démo", heroFootOne:"Les mouvements de marché demandent de l’attention.", heroFootTwo:"Les options binaires comportent des risques.",
    marketsEyebrow:"MARCHÉS", marketsTitle:"Les marchés sur<br /><em>une seule plateforme.</em>", marketsDescription:"Devises, cryptoactifs, indices et matières premières à sélectionner, suivre et trader depuis une même interface.", marketsMoving:"MARCHÉS EN MOUVEMENT", demoIndicators:"Indicateurs illustratifs", filterAll:"Tous", filterCurrencies:"Devises", filterCrypto:"Crypto", filterIndices:"Indices", filterCommodities:"Matières premières", marketDisclaimer:"Valeurs indicatives, susceptibles de changer. Elles ne constituent pas une recommandation de trading.",
    chooseAsset:"Choisissez un actif", defineEntry:"Définissez votre entrée", platformEyebrow:"LA PLATEFORME", experienceTitle:"Une interface conçue<br /><em>pour trader.</em>", experienceDescription:"De la sélection d’un actif au suivi du graphique, chaque écran est organisé pour vous donner les informations utiles avant votre décision.", stepOneTitle:"Trouvez un actif", stepOneText:"Une sélection organisée pour accéder rapidement à ce que vous cherchez.", stepTwoTitle:"Définissez le montant", stepTwoText:"Vous pouvez commencer à partir de 1 USD.", stepThreeTitle:"Tradez en conscience", stepThreeText:"La décision vous appartient. La plateforme garde l’information visible.", exploreDemo:"Découvrir le compte démo",
    paymentsEyebrow:"PAIEMENTS", paymentsTitle:"Des méthodes pour<br /><em>votre compte.</em>", paymentsDescription:"Consultez les méthodes disponibles dans votre région avant de déposer ou de demander un retrait.", cards:"Cartes", cardsText:"Utilisez une carte de crédit ou de débit si cette méthode est activée pour votre compte.", transfers:"Virements", transfersText:"Consultez les options bancaires et les informations requises dans l’espace paiements.", wallets:"Portefeuilles numériques", walletsText:"Découvrez les portefeuilles compatibles avec votre localisation.", cryptoassets:"Cryptoactifs", cryptoassetsText:"Vérifiez les actifs acceptés et les instructions réseau avant de confirmer un transfert.", paymentNotice:"La disponibilité de chaque méthode dépend de la région, du compte et des vérifications applicables.",
    you:"Vous", now:"Maintenant", supportEyebrow:"ASSISTANCE", supportTitle:"De l’aide à chaque<br /><em>prochaine étape.</em>", supportDescription:"Trouvez les indications pour accéder à votre compte, utiliser la plateforme et consulter les paiements avant d’agir.", supportQuestion:"Je dois confirmer une méthode de paiement. Où puis-je trouver cette information ?", supportAnswer:"Dans votre compte, ouvrez Paiements pour consulter les méthodes activées et les instructions avant de déplacer des fonds.", supportThanks:"Compris. Merci.", responsibleLink:"Trading responsable", responsibilityEyebrow:"TRADEZ AVEC RESPONSABILITÉ", responsibilityTitle:"Une bonne décision commence<br />par savoir ce qui est en jeu.", responsibilityDescription:"Les options binaires comportent des risques et peuvent entraîner la perte de votre investissement. Avant de trader, comprenez le produit, utilisez le compte démo et choisissez des montants adaptés à votre situation.", openDemo:"Ouvrir le compte démo", footerRisk:"Les options binaires comportent des risques. Ne tradez pas des montants que vous ne pouvez pas perdre.", privacy:"CONFIDENTIALITÉ", cookieTitle:"Votre navigation, votre choix.", cookieText:"Nous utilisons des cookies essentiels pour sécuriser le site et mémoriser vos préférences. Vous pouvez tout accepter ou continuer avec les cookies essentiels.", essentialOnly:"Essentiels uniquement", acceptAll:"Tout accepter", selectAsset:"Sélectionner", tradeNow:"Trader maintenant", updatedAt:"Mis à jour"
  },
  th: {
    skip:"ข้ามไปยังเนื้อหา", language:"เลือกภาษา", languageCode:"TH", openMenu:"เปิดเมนู", signIn:"เข้าสู่ระบบ", createAccount:"สร้างบัญชี", createMyAccount:"สร้างบัญชีของฉัน", navMarkets:"ตลาด", navPlatform:"แพลตฟอร์ม", navPayments:"การชำระเงิน", navSupport:"ช่วยเหลือ", navResponsibility:"เทรดอย่างรับผิดชอบ",
    heroEyebrow:"ไบนารีออปชัน", heroTitle:"เมื่อคุณตัดสินใจ<br /><em>จะขยับ เริ่มที่นี่</em>", heroDescription:"แพลตฟอร์มไบนารีออปชันสำหรับติดตามสินทรัพย์ กำหนดเงินเข้า และตัดสินใจด้วยข้อมูลสำคัญที่มองเห็นได้ชัดเจน", howItWorks:"ดูวิธีการทำงาน", minEntry:"เงินเข้าเริ่มต้น", demo:"เดโม", demoFact:"ฝึกก่อนเริ่มเทรด", assets:"สินทรัพย์", assetsFact:"บนแพลตฟอร์มเดียว", platformLabel:"แพลตฟอร์ม", entryMinimum:"เงินเข้าเริ่มต้น", practiceEnvironment:"พื้นที่ฝึกฝน", demoAccount:"บัญชีเดโม", heroFootOne:"การเคลื่อนไหวของตลาดต้องอาศัยความใส่ใจ", heroFootTwo:"ไบนารีออปชันมีความเสี่ยง",
    marketsEyebrow:"ตลาด", marketsTitle:"ตลาดบน<br /><em>แพลตฟอร์มเดียว</em>", marketsDescription:"สกุลเงิน คริปโต ดัชนี และสินค้าโภคภัณฑ์ ให้คุณเลือก ติดตาม และเทรดจากอินเทอร์เฟซเดียว", marketsMoving:"ตลาดกำลังเคลื่อนไหว", demoIndicators:"ตัวบ่งชี้เพื่อการสาธิต", filterAll:"ทั้งหมด", filterCurrencies:"สกุลเงิน", filterCrypto:"คริปโต", filterIndices:"ดัชนี", filterCommodities:"สินค้าโภคภัณฑ์", marketDisclaimer:"ราคาเพื่อการสาธิตและอาจเปลี่ยนแปลงได้ ไม่ใช่คำแนะนำในการเทรด",
    chooseAsset:"เลือกสินทรัพย์", defineEntry:"กำหนดเงินเข้า", platformEyebrow:"แพลตฟอร์ม", experienceTitle:"อินเทอร์เฟซที่สร้าง<br /><em>มาเพื่อการเทรด</em>", experienceDescription:"ตั้งแต่การเลือกสินทรัพย์จนถึงการติดตามกราฟ ทุกหน้าจอถูกออกแบบเพื่อให้คุณมีข้อมูลที่จำเป็นก่อนตัดสินใจ", stepOneTitle:"ค้นหาสินทรัพย์", stepOneText:"รายการที่จัดระเบียบเพื่อช่วยให้คุณพบสิ่งที่ต้องการ", stepTwoTitle:"กำหนดจำนวนเงิน", stepTwoText:"คุณเริ่มได้ด้วยเงินเข้าเพียง 1 ดอลลาร์สหรัฐ", stepThreeTitle:"เทรดอย่างมีสติ", stepThreeText:"การตัดสินใจเป็นของคุณ แพลตฟอร์มทำให้ข้อมูลมองเห็นได้ชัดเจน", exploreDemo:"ดูบัญชีเดโม",
    paymentsEyebrow:"การชำระเงิน", paymentsTitle:"วิธีการที่รองรับ<br /><em>บัญชีของคุณ</em>", paymentsDescription:"ตรวจสอบวิธีการที่ใช้ได้ในภูมิภาคของคุณในส่วนการชำระเงินก่อนฝากหรือขอถอน", cards:"บัตร", cardsText:"ใช้บัตรเครดิตหรือเดบิตเมื่อวิธีนี้เปิดใช้สำหรับบัญชีของคุณ", transfers:"การโอนเงิน", transfersText:"ตรวจสอบตัวเลือกธนาคารและรายละเอียดที่จำเป็นในส่วนการชำระเงิน", wallets:"กระเป๋าเงินดิจิทัล", walletsText:"ดูว่ากระเป๋าเงินใดรองรับตำแหน่งที่ตั้งของคุณ", cryptoassets:"คริปโต", cryptoassetsText:"ตรวจสอบสินทรัพย์ที่รับและคำแนะนำเครือข่ายก่อนยืนยันการโอน", paymentNotice:"การใช้ได้ของแต่ละวิธีขึ้นอยู่กับภูมิภาค บัญชี และการยืนยันที่เกี่ยวข้อง",
    you:"คุณ", now:"ตอนนี้", supportEyebrow:"ช่วยเหลือ", supportTitle:"ความช่วยเหลือสำหรับ<br /><em>ทุกขั้นตอนต่อไป</em>", supportDescription:"ค้นหาคำแนะนำในการเข้าบัญชี ใช้แพลตฟอร์ม และตรวจสอบการชำระเงินก่อนดำเนินการ", supportQuestion:"ฉันต้องยืนยันวิธีการชำระเงิน ฉันดูข้อมูลนี้ได้ที่ไหน?", supportAnswer:"ในบัญชีของคุณ เปิดการชำระเงินเพื่อตรวจสอบวิธีที่เปิดใช้และคำแนะนำก่อนย้ายเงิน", supportThanks:"เข้าใจแล้ว ขอบคุณ", responsibleLink:"เทรดอย่างรับผิดชอบ", responsibilityEyebrow:"เทรดอย่างรับผิดชอบ", responsibilityTitle:"การตัดสินใจที่ดีเริ่มต้น<br />จากการรู้ว่าอะไรอยู่ในความเสี่ยง", responsibilityDescription:"ไบนารีออปชันมีความเสี่ยงและอาจทำให้สูญเสียเงินลงทุนได้ ก่อนเทรด โปรดทำความเข้าใจผลิตภัณฑ์ ใช้บัญชีเดโม และเลือกจำนวนเงินที่เหมาะกับคุณ", openDemo:"เปิดบัญชีเดโม", footerRisk:"ไบนารีออปชันมีความเสี่ยง อย่าเทรดด้วยจำนวนเงินที่คุณไม่สามารถสูญเสียได้", privacy:"ความเป็นส่วนตัว", cookieTitle:"การท่องเว็บ ทางเลือกของคุณ", cookieText:"เราใช้คุกกี้ที่จำเป็นเพื่อดูแลความปลอดภัยของเว็บไซต์และจดจำการตั้งค่าของคุณ คุณสามารถยอมรับทั้งหมดหรือดำเนินการต่อด้วยคุกกี้ที่จำเป็นเท่านั้น", essentialOnly:"เฉพาะที่จำเป็น", acceptAll:"ยอมรับทั้งหมด", selectAsset:"เลือก", tradeNow:"เทรดตอนนี้", updatedAt:"อัปเดต"
  }
};
const legalTranslations = {
  pt: { legalTitle:"Regulamentos", privacyPolicy:"Política de privacidade", serviceAgreement:"Acordo de serviço", riskDisclosure:"Advertência de risco", tradingRules:"Regras de operações comerciais", nonTradingRules:"Regulamentos de operações não-comerciais", affiliateProgram:"Programa de afiliados", legalAddress:"ON SPOT GROUP LLC Endereço: Main Street, P.O. Box 625, Charlestown, St. Kitts e Nevis.", legalAvailability:"Os serviços do site não estão disponíveis em vários países, incluindo EUA, Canadá, Hong Kong, países do EEE, Israel e Rússia, bem como para pessoas com menos de 18 anos de idade.", legalRisk:"Aviso de risco: a negociação de Forex e instrumentos financeiros alavancados envolve risco significativo e pode resultar na perda de seu capital investido. Você não deve investir mais do que pode perder e deve certificar-se de que compreende totalmente os riscos envolvidos. A negociação de produtos alavancados pode não ser adequada para todos os investidores. A negociação de produtos não alavancados, como ações, também envolve risco, pois o valor de uma ação pode tanto cair quanto subir, o que pode resultar em um rendimento menor do que o investido originalmente. O desempenho passado não é garantia de resultados futuros. Antes de negociar, leve em consideração seu nível de experiência e objetivos de investimento e procure aconselhamento financeiro independente, se necessário. É responsabilidade do cliente verificar se tem permissão para utilizar os serviços da marca MoveOption de acordo com os requisitos legais de seu país de residência.", legalCopyright:"ON SPOT GROUP LLC é o proprietário do domínio moveoption.com.<br />Copyright © <span data-year></span> MoveOption. Todos os direitos reservados." },
  fr: { legalTitle:"Mentions légales", privacyPolicy:"Politique de confidentialité", serviceAgreement:"Contrat de service", riskDisclosure:"Avertissement sur les risques", tradingRules:"Règles de trading", nonTradingRules:"Opérations non commerciales", affiliateProgram:"Programme d’affiliation", legalAddress:"ON SPOT GROUP LLC Adresse : Main Street, P.O. Box 625, Charlestown, Saint-Kitts-et-Nevis.", legalAvailability:"Les services du site ne sont pas disponibles dans plusieurs pays, notamment aux États-Unis, au Canada, à Hong Kong, dans les pays de l’EEE, en Israël et en Russie, ni pour les personnes de moins de 18 ans.", legalRisk:"Avertissement sur les risques : le trading sur le Forex et les instruments financiers à effet de levier comporte un risque important et peut entraîner la perte de votre capital investi. Vous ne devez pas investir plus que ce que vous pouvez vous permettre de perdre et devez vous assurer de comprendre pleinement les risques encourus. Le trading de produits à effet de levier peut ne pas convenir à tous les investisseurs. Le trading de produits sans effet de levier, tels que les actions, comporte également des risques, car leur valeur peut baisser ou augmenter et entraîner un rendement inférieur au montant investi initialement. Les performances passées ne garantissent pas les résultats futurs. Avant de trader, tenez compte de votre niveau d’expérience et de vos objectifs d’investissement et demandez un avis financier indépendant si nécessaire. Il incombe au client de vérifier qu’il est autorisé à utiliser les services de MoveOption conformément aux exigences légales de son pays de résidence.", legalCopyright:"ON SPOT GROUP LLC est propriétaire du domaine moveoption.com.<br />Copyright © <span data-year></span> MoveOption. Tous droits réservés." },
  th: { legalTitle:"ข้อกำหนด", privacyPolicy:"นโยบายความเป็นส่วนตัว", serviceAgreement:"ข้อตกลงการให้บริการ", riskDisclosure:"คำเตือนความเสี่ยง", tradingRules:"กฎการเทรด", nonTradingRules:"การดำเนินการที่ไม่ใช่การเทรด", affiliateProgram:"โปรแกรมพันธมิตร", legalAddress:"ON SPOT GROUP LLC ที่อยู่: Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis.", legalAvailability:"บริการของเว็บไซต์ไม่พร้อมให้บริการในหลายประเทศ รวมถึงสหรัฐอเมริกา แคนาดา ฮ่องกง ประเทศในเขต EEA อิสราเอล และรัสเซีย รวมถึงบุคคลที่มีอายุต่ำกว่า 18 ปี", legalRisk:"คำเตือนความเสี่ยง: การเทรด Forex และเครื่องมือทางการเงินที่มีเลเวอเรจมีความเสี่ยงสูงและอาจส่งผลให้สูญเสียเงินลงทุน คุณไม่ควรลงทุนเกินกว่าที่สามารถยอมรับการสูญเสียได้ และควรทำความเข้าใจความเสี่ยงที่เกี่ยวข้องอย่างครบถ้วน ผลิตภัณฑ์ที่มีเลเวอเรจอาจไม่เหมาะกับนักลงทุนทุกคน การเทรดผลิตภัณฑ์ที่ไม่มีเลเวอเรจ เช่น หุ้น ก็มีความเสี่ยงเช่นกัน เนื่องจากมูลค่าอาจลดลงหรือเพิ่มขึ้นและอาจให้ผลตอบแทนน้อยกว่าเงินลงทุนเดิม ผลการดำเนินงานในอดีตไม่ได้รับประกันผลลัพธ์ในอนาคต ก่อนเทรด โปรดพิจารณาประสบการณ์และวัตถุประสงค์การลงทุนของคุณ และขอคำแนะนำทางการเงินอิสระหากจำเป็น ลูกค้ามีหน้าที่ตรวจสอบว่าตนได้รับอนุญาตให้ใช้บริการ MoveOption ตามข้อกำหนดทางกฎหมายของประเทศที่พำนักอยู่", legalCopyright:"ON SPOT GROUP LLC เป็นเจ้าของโดเมน moveoption.com.<br />ลิขสิทธิ์ © <span data-year></span> MoveOption สงวนลิขสิทธิ์" }
};

const languageExtras = {
  pt: { officialPartner:"Parceiro Oficial", reviewsEyebrow:"AVALIAÇÕES DA PLATAFORMA", reviewsTitle:"O que as pessoas valorizam na experiência.", reviewsDescription:"Comentários ilustrativos sobre a experiência na plataforma. Não representam resultados financeiros.", reviewNameOne:"Usuário da plataforma", reviewRoleOne:"Experiência da conta", reviewTextOne:"“A seleção de ativos é fácil de entender, e as informações de que preciso estão em um só lugar antes de decidir.”", reviewNameTwo:"Usuário da conta demo", reviewRoleTwo:"Aprendendo a plataforma", reviewTextTwo:"“Começar no ambiente demo ajudou-me a entender o fluxo antes de decidir se queria operar.”", reviewNameThree:"Usuário mobile", reviewRoleThree:"Navegação na plataforma", reviewTextThree:"“A interface torna simples acompanhar um ativo e encontrar os controles sem ruído desnecessário.”", reviewNameFour:"Usuário da conta", reviewRoleFour:"Área de pagamentos", reviewTextFour:"“Gosto de poder verificar os métodos de pagamento liberados para a minha conta antes de agir.”", reviewNameFive:"Novo usuário", reviewRoleFive:"Primeiros passos", reviewTextFive:"“A estrutura é direta: escolha o ativo, defina o valor e reveja as informações antes de operar.”", reviewNameSix:"Usuário da plataforma", reviewRoleSix:"Fluxo de decisão", reviewTextSix:"“É mais focado quando a informação essencial está visível e o próximo passo é claro.”" },
  fr: { officialPartner:"Partenaire officiel", reviewsEyebrow:"RETOURS SUR LA PLATEFORME", reviewsTitle:"Ce que les utilisateurs apprécient dans l’expérience.", reviewsDescription:"Retours illustratifs sur l’expérience de la plateforme. Ils ne constituent pas une déclaration de résultats financiers.", reviewNameOne:"Utilisateur de la plateforme", reviewRoleOne:"Expérience du compte", reviewTextOne:"« La sélection des actifs est facile à comprendre et les informations dont j’ai besoin sont réunies avant ma décision. »", reviewNameTwo:"Utilisateur du compte démo", reviewRoleTwo:"Découverte de la plateforme", reviewTextTwo:"« Commencer dans l’environnement démo m’a aidé à comprendre le fonctionnement avant de décider de trader. »", reviewNameThree:"Utilisateur mobile", reviewRoleThree:"Navigation", reviewTextThree:"« L’interface permet de suivre un actif et de trouver les contrôles sans éléments superflus. »", reviewNameFour:"Utilisateur du compte", reviewRoleFour:"Espace paiements", reviewTextFour:"« J’apprécie de pouvoir vérifier les méthodes de paiement disponibles avant d’agir. »", reviewNameFive:"Nouvel utilisateur", reviewRoleFive:"Premiers pas", reviewTextFive:"« La structure est directe : choisir l’actif, définir le montant et revoir les informations avant de trader. »", reviewNameSix:"Utilisateur de la plateforme", reviewRoleSix:"Décision", reviewTextSix:"« L’expérience est plus claire lorsque l’information essentielle est visible et que l’étape suivante est évidente. »" },
  th: { officialPartner:"พันธมิตรอย่างเป็นทางการ", reviewsEyebrow:"ความคิดเห็นเกี่ยวกับแพลตฟอร์ม", reviewsTitle:"สิ่งที่ผู้ใช้ให้ความสำคัญในประสบการณ์นี้", reviewsDescription:"ความคิดเห็นตัวอย่างเกี่ยวกับประสบการณ์บนแพลตฟอร์ม ไม่ใช่คำกล่าวอ้างเกี่ยวกับผลลัพธ์ทางการเงิน", reviewNameOne:"ผู้ใช้แพลตฟอร์ม", reviewRoleOne:"ประสบการณ์บัญชี", reviewTextOne:"“การเลือกสินทรัพย์เข้าใจง่าย และข้อมูลที่ต้องใช้ถูกรวมไว้ในที่เดียวก่อนตัดสินใจ”", reviewNameTwo:"ผู้ใช้บัญชีเดโม", reviewRoleTwo:"เรียนรู้แพลตฟอร์ม", reviewTextTwo:"“การเริ่มต้นในสภาพแวดล้อมเดโมช่วยให้ฉันเข้าใจขั้นตอนก่อนตัดสินใจเทรด”", reviewNameThree:"ผู้ใช้มือถือ", reviewRoleThree:"การใช้งานแพลตฟอร์ม", reviewTextThree:"“อินเทอร์เฟซทำให้ติดตามสินทรัพย์และหาการควบคุมได้ง่ายโดยไม่มีสิ่งรบกวน”", reviewNameFour:"ผู้ใช้บัญชี", reviewRoleFour:"ส่วนการชำระเงิน", reviewTextFour:"“ฉันชอบที่ตรวจสอบวิธีชำระเงินที่ใช้ได้สำหรับบัญชีของฉันได้ก่อนดำเนินการ”", reviewNameFive:"ผู้ใช้ใหม่", reviewRoleFive:"เริ่มต้นใช้งาน", reviewTextFive:"“โครงสร้างตรงไปตรงมา เลือกสินทรัพย์ กำหนดจำนวนเงิน และดูข้อมูลก่อนเทรด”", reviewNameSix:"ผู้ใช้แพลตฟอร์ม", reviewRoleSix:"ขั้นตอนการตัดสินใจ", reviewTextSix:"“ประสบการณ์มีสมาธิมากขึ้นเมื่อข้อมูลสำคัญมองเห็นได้และขั้นตอนต่อไปชัดเจน”" }
};
let currentLanguage = localStorage.getItem("moveoption-language") || "en";
const t = (key) => translations[currentLanguage]?.[key] || languageExtras[currentLanguage]?.[key] || legalTranslations[currentLanguage]?.[key] || baseStrings[key] || key;

const assets = [
  { name: "EUR/USD", symbol: "EUR", icon: "€", category: "moedas", value: 1.08442, decimals: 5, change: 0.57, tone: "mint", graph: [39,50,46,56,34,39,51,62,41,51,45,31,29,38,25,31] },
  { name: "GBP/USD", symbol: "GBP", icon: "£", category: "moedas", value: 1.27290, decimals: 5, change: 0.24, tone: "blue", graph: [45,51,49,54,52,60,48,42,45,36,43,39,45,34,39,43] },
  { name: "EUR/JPY", symbol: "JPY", icon: "¥", category: "moedas", value: 169.373, decimals: 3, change: -0.18, tone: "coral", graph: [44,40,47,42,51,43,48,38,41,32,37,28,34,24,30,20] },
  { name: "AUD/USD", symbol: "AUD", icon: "A$", category: "moedas", value: 0.65938, decimals: 5, change: 0.11, tone: "lime", graph: [39,45,31,35,27,37,33,44,51,46,56,50,61,55,68,64] },
  { name: "Bitcoin", symbol: "BTC", icon: "₿", category: "cripto", value: 67838.53, decimals: 2, change: 0.73, tone: "mint", graph: [38,48,42,51,30,36,49,56,38,28,35,46,42,31,25,35] },
  { name: "Ethereum", symbol: "ETH", icon: "Ξ", category: "cripto", value: 3521.82, decimals: 2, change: -0.42, tone: "coral", graph: [32,39,35,49,44,53,47,55,42,35,40,31,37,26,30,23] },
  { name: "Solana", symbol: "SOL", icon: "S", category: "cripto", value: 148.26, decimals: 2, change: 1.16, tone: "blue", graph: [50,47,54,42,50,57,53,64,60,70,58,65,61,73,68,77] },
  { name: "Nasdaq 100", symbol: "NQ", icon: "100", category: "indices", value: 18113.20, decimals: 2, change: 0.31, tone: "blue", graph: [38,44,40,47,51,45,49,58,55,61,58,65,68,62,73,69] },
  { name: "S&P 500", symbol: "SPX", icon: "500", category: "indices", value: 5467.11, decimals: 2, change: 0.18, tone: "lime", graph: [34,37,39,36,42,45,41,47,51,48,55,52,58,55,61,63] },
  { name: "Ouro", symbol: "XAU", icon: "Au", category: "commodities", value: 2652.60, decimals: 2, change: 0.12, tone: "lime", graph: [30,34,41,38,45,49,44,52,47,55,61,59,67,63,71,74] },
  { name: "Petróleo", symbol: "WTI", icon: "◒", category: "commodities", value: 72.19, decimals: 2, change: -0.29, tone: "coral", graph: [62,57,65,56,52,59,46,50,40,45,37,42,34,39,31,35] },
  { name: "Prata", symbol: "XAG", icon: "Ag", category: "commodities", value: 30.48, decimals: 2, change: 0.48, tone: "mint", graph: [37,42,33,47,41,52,48,56,53,62,58,66,61,70,67,76] }
];

const assetGrid = document.querySelector("[data-assets]");
const filterBar = document.querySelector("[data-market-filters]");
const status = document.querySelector("[data-market-status]");
let activeFilter = "todos";

function price(value, decimals) {
  const locale = { en: "en-US", pt: "pt-BR", fr: "fr-FR", th: "th-TH" }[currentLanguage] || "en-US";
  return value.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function graph(points) {
  const last = points.length - 1;
  const line = points.map((point, index) => `${index ? "L" : "M"}${(index / last) * 100} ${100 - point}`).join(" ");
  const area = `${line} L100 100 L0 100 Z`;
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="graph-area" d="${area}"></path><path class="graph-track" d="${line}"></path><path class="graph-trace" d="${line}"></path><circle class="graph-dot" r="2.05"></circle></svg>`;
}
function renderAssets() {
  const list = activeFilter === "todos" ? assets : assets.filter((asset) => asset.category === activeFilter);
  assetGrid.innerHTML = list.map((asset) => {
    const down = asset.change < 0;
    return `<article class="asset-card" tabindex="0" role="button" aria-expanded="false" aria-label="${t("selectAsset")} ${asset.name}" data-asset-card data-tone="${asset.tone}"><div class="asset-head"><span class="asset-icon">${asset.icon}</span><div class="asset-title"><strong>${asset.name}</strong><span>${asset.symbol}</span></div></div><span class="asset-change${down ? " is-down" : ""}">${down ? "↘" : "↗"} ${Math.abs(asset.change).toFixed(2)}%</span><strong class="asset-value">${price(asset.value, asset.decimals)}</strong><button class="asset-trade" type="button" data-trade-asset="${asset.name}">${t("tradeNow")} <span aria-hidden="true">↗</span></button><div class="asset-graph">${graph(asset.graph)}</div></article>`;
  }).join("");
  const activeTerminal = document.querySelector("[data-market-terminal]");
  if (activeTerminal.classList.contains("is-animated")) startMarketGraphAnimation();
}
filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filterBar.querySelectorAll("button").forEach((item) => { const selected = item === button; item.classList.toggle("is-active", selected); item.setAttribute("aria-selected", String(selected)); });
  renderAssets();
});
function updateMarket() {
  assets.forEach((asset) => { const variation = (Math.random() - .48) * .0012; asset.value += asset.value * variation; asset.change += variation * 100; });
  renderAssets();
  setMarketStatus();
}
function setMarketStatus() {
  const locale = { en: "en-US", pt: "pt-BR", fr: "fr-FR", th: "th-TH" }[currentLanguage] || "en-US";
  const now = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(new Date());
  status.textContent = `${t("updatedAt")}: ${now}`;
}

const englishText = Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map((element) => [element.dataset.i18n, element.textContent]));
const englishHtml = Object.fromEntries([...document.querySelectorAll("[data-i18n-html]")].map((element) => [element.dataset.i18nHtml, element.innerHTML]));

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  document.documentElement.querySelector("meta[name='description']").setAttribute("content", language === "en" ? "MoveOption. A platform for binary options trading with clarity." : "MoveOption");
  document.title = language === "en" ? "MoveOption | Binary options" : "MoveOption";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = language === "en" ? englishText[element.dataset.i18n] : t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = language === "en" ? englishHtml[element.dataset.i18nHtml] : t(element.dataset.i18nHtml); });
  document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
  document.querySelector("[data-current-language]").textContent = t("languageCode");
  document.querySelectorAll("[data-language]").forEach((button) => button.classList.toggle("is-active", button.dataset.language === language));
  localStorage.setItem("moveoption-language", language);
  renderAssets();
  setMarketStatus();
}
renderAssets();
applyLanguage(currentLanguage);
window.setInterval(updateMarket, 8000);

assetGrid.addEventListener("click", (event) => {
  const trade = event.target.closest("[data-trade-asset]");
  if (trade) {
    const tradingRoomUrl = document.body.dataset.tradingRoomUrl;
    if (tradingRoomUrl) window.location.assign(tradingRoomUrl);
    return;
  }
  const card = event.target.closest("[data-asset-card]");
  if (!card) return;
  const selected = card.classList.contains("is-selected");
  assetGrid.querySelectorAll("[data-asset-card]").forEach((item) => { item.classList.remove("is-selected"); item.setAttribute("aria-expanded", "false"); });
  if (!selected) { card.classList.add("is-selected"); card.setAttribute("aria-expanded", "true"); }
});
assetGrid.addEventListener("keydown", (event) => {
  if (!event.target.matches("[data-asset-card]") || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  event.target.click();
});

const header = document.querySelector("[data-header]");
const heroDevice = document.querySelector("[data-hero-device]");
function onScroll() { const y = window.scrollY; header.classList.toggle("is-scrolled", y > 64); if (heroDevice && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) heroDevice.style.setProperty("--device-offset", `${Math.min(y * .1, 52)}px`); }
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); mobileNav.classList.toggle("is-open", !open); });
mobileNav.addEventListener("click", (event) => { if (!event.target.matches("a")) return; menuButton.setAttribute("aria-expanded", "false"); mobileNav.classList.remove("is-open"); });

const languagePicker = document.querySelector("[data-language-picker]");
const languageTrigger = document.querySelector("[data-language-trigger]");
languageTrigger.addEventListener("click", () => {
  const open = languageTrigger.getAttribute("aria-expanded") === "true";
  languageTrigger.setAttribute("aria-expanded", String(!open));
  languagePicker.classList.toggle("is-open", !open);
});
languagePicker.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-language]");
  if (!choice) return;
  applyLanguage(choice.dataset.language);
  languageTrigger.setAttribute("aria-expanded", "false");
  languagePicker.classList.remove("is-open");
});
document.addEventListener("click", (event) => {
  if (languagePicker.contains(event.target)) return;
  languageTrigger.setAttribute("aria-expanded", "false");
  languagePicker.classList.remove("is-open");
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const terminal = document.querySelector("[data-market-terminal]");
let graphAnimationFrame;

function startMarketGraphAnimation() {
  window.cancelAnimationFrame(graphAnimationFrame);
  const graphs = [...terminal.querySelectorAll(".asset-graph svg")].map((svg, index) => {
    const trace = svg.querySelector(".graph-trace");
    const dot = svg.querySelector(".graph-dot");
    const length = trace.getTotalLength();
    trace.style.strokeDasharray = String(length);
    trace.style.strokeDashoffset = String(length);
    return { trace, dot, length, delay: index * 260, duration: 5400 + (index % 4) * 260 };
  });
  const startedAt = performance.now();

  const draw = (now) => {
    graphs.forEach(({ trace, dot, length, delay, duration }) => {
      const elapsed = now - startedAt - delay;
      const progress = elapsed <= 0 ? 0 : Math.min((elapsed % (duration + 1100)) / duration, 1);
      const point = trace.getPointAtLength(length * progress);
      trace.style.strokeDashoffset = String(length * (1 - progress));
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);
      dot.style.opacity = progress > 0 ? "1" : "0";
    });
    graphAnimationFrame = window.requestAnimationFrame(draw);
  };
  graphAnimationFrame = window.requestAnimationFrame(draw);
}

const graphObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  terminal.classList.add("is-animated");
  startMarketGraphAnimation();
  graphObserver.unobserve(entry.target);
}), { threshold: .28 });
graphObserver.observe(terminal);

const cookieBanner = document.querySelector("[data-cookie-banner]");
if (localStorage.getItem("moveoption-cookie-choice")) cookieBanner.classList.add("is-hidden");
document.querySelectorAll("[data-cookie-choice]").forEach((button) => button.addEventListener("click", () => { localStorage.setItem("moveoption-cookie-choice", button.dataset.cookieChoice); cookieBanner.classList.add("is-hidden"); }));
document.querySelector("[data-cookie-close]").addEventListener("click", () => cookieBanner.classList.add("is-hidden"));
document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
