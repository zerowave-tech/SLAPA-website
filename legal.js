// Legal documents for SLAPA, four languages. Plain data — no framework.
const L = {
  ru: {
    updated: "Обновлено: 17 августа 2026",
    controller: "SLAPA, hello@slapa.agency",
    docs: [
      {
        id: "privacy",
        title: "Политика конфиденциальности",
        lede: "Документ описывает, какие данные мы получаем, зачем они нужны и как долго хранятся.",
        sections: [
          ["Кто обрабатывает данные", "Оператором данных выступает агентство SLAPA. По любым вопросам об обработке пишите на hello@slapa.agency — отвечаем в течение трёх рабочих дней."],
          ["Какие данные мы получаем", "Из формы заявки: имя, контакт (email или Telegram), ссылка на сайт и описание задачи. Из аналитики, если вы дали согласие: обезличенные данные о посещении — страницы, источник перехода, тип устройства. Из переписки: то, что вы сами присылаете."],
          ["Зачем они нужны", "Ответить на заявку и подготовить оценку, вести проект и переписку по нему, выставить счёт и выполнить требования учёта. Аналитику используем только чтобы понимать, какие разделы сайта читают."],
          ["Основание обработки", "Ваше согласие при отправке формы и установке необязательных cookie, а также исполнение договора, если мы начали работу."],
          ["Кому передаём", "Мы не продаём и не передаём данные третьим лицам для их собственных целей. Данные могут обрабатываться поставщиками, которых мы используем как инструменты: хостинг сайта, почтовый сервис, сервис записи на встречу (Cal.com), сервис аналитики. Каждый получает только необходимый минимум."],
          ["Сколько храним", "Переписку по заявке — до двух лет с последнего контакта. Договоры и счёты — в течение срока, установленного законом. Аналитику — до 14 месяцев в обезличенном виде."],
          ["Ваши права", "Вы можете запросить копию своих данных, исправление, удаление или ограничение обработки, а также отозвать согласие. Достаточно письма на hello@slapa.agency."]
        ]
      },
      {
        id: "cookies",
        title: "Политика cookie",
        lede: "Cookie — небольшие файлы, которые сайт сохраняет в браузере. Мы делим их на две группы.",
        sections: [
          ["Обязательные", "Нужны, чтобы сайт работал: запоминают выбранный язык и ваш ответ в баннере согласия. Их нельзя отключить — без них сайт не сможет работать корректно. Срок хранения — до 12 месяцев."],
          ["Аналитические", "Подключаются только после нажатия «Принять». Показывают обезличенную статистику: сколько человек открыли страницу, откуда пришли, какие разделы читали. Мы не используем их для рекламы и профилирования. Срок хранения — до 14 месяцев."],
          ["Как изменить выбор", "Нажмите «Настройки cookie» в подвале сайта — баннер согласия появится снова, и решение можно поменять. Также cookie можно удалить в настройках браузера."],
          ["Сторонние сервисы", "Страница записи на встречу открывается через Cal.com и ставит собственные cookie, необходимые для работы календаря. Их использование описано в политике Cal.com."],
          ["Если вы отказались", "Сайт продолжит работать полностью. Мы просто не будем видеть статистику вашего визита."]
        ]
      },
      {
        id: "terms",
        title: "Пользовательское соглашение",
        lede: "Условия использования сайта и общие правила работы над проектом.",
        sections: [
          ["Что делает сайт", "Сайт носит информационный характер: рассказывает об услугах и позволяет отправить заявку или выбрать время встречи. Отправка формы не является договором и не обязывает ни одну из сторон."],
          ["Заявки и оценки", "Оценка, которую мы присылаем в ответ на заявку, ориентировочная. Итоговый объём работ, сроки и стоимость фиксируются в договоре или счёте до начала работы."],
          ["Права на материалы", "Тексты, изображения и доступы, которые вы нам передаёте, остаются вашей собственностью. Готовый дизайн и вёрстка переходят к вам после полной оплаты."],
          ["Наши примеры работ", "Мы вправе показывать выполненный проект в портфолио и соцсетях. Если публиковать нельзя, скажите об этом до начала работы — зафиксируем в договоре."],
          ["Содержимое сайта", "Оформление, тексты и логотип SLAPA принадлежат агентству. Копирование целиком без разрешения не допускается; ссылаться на материалы можно свободно."],
          ["Ответственность", "Мы не отвечаем за работу сторонних сервисов, на которые ведут ссылки, и за последствия изменений, внесённых в проект после сдачи без нашего участия."]
        ]
      },
      {
        id: "security",
        title: "Безопасность данных",
        lede: "Как мы обращаемся с доступами и файлами проекта.",
        sections: [
          ["Доступы", "Логины к сайту, хостингу и домену храним в менеджере паролей и запрашиваем только на время работ. По возможности просим отдельную учётную запись с ограниченными правами вместо главного администратора."],
          ["После сдачи проекта", "Доступы возвращаем вам, а свои учётные записи удаляем. По вашему запросу удаляем и рабочие копии файлов."],
          ["Передача файлов", "Материалы принимаем по защищённым ссылкам или на почту. Пароли просим присылать отдельно от логинов и не оставлять их в переписке дольше необходимого."],
          ["Сайт и соединение", "Сайт работает по HTTPS. Заявки приходят на рабочую почту с двухфакторной аутентификацией."],
          ["Если что-то произошло", "При инциденте, который может затронуть ваши данные, сообщаем вам в течение 72 часов и описываем, что именно произошло и какие меры приняты."]
        ]
      }
    ]
  },

  uk: {
    updated: "Оновлено: 17 серпня 2026",
    controller: "SLAPA, hello@slapa.agency",
    docs: [
      {
        id: "privacy",
        title: "Політика конфіденційності",
        lede: "Документ описує, які дані ми отримуємо, для чого вони потрібні і як довго зберігаються.",
        sections: [
          ["Хто обробляє дані", "Оператором даних є агентство SLAPA. З будь-яких питань щодо обробки пишіть на hello@slapa.agency — відповідаємо протягом трьох робочих днів."],
          ["Які дані ми отримуємо", "З форми заявки: ім'я, контакт (email або Telegram), посилання на сайт і опис задачі. З аналітики, якщо ви дали згоду: знеособлені дані про відвідування — сторінки, джерело переходу, тип пристрою. З переписки: те, що ви надсилаєте самі."],
          ["Для чого вони потрібні", "Відповісти на заявку і підготувати оцінку, вести проєкт і переписку щодо нього, виставити рахунок і виконати вимоги обліку. Аналітику використовуємо лише щоб розуміти, які розділи сайту читають."],
          ["Підстава обробки", "Ваша згода під час надсилання форми і встановлення необов'язкових cookie, а також виконання договору, якщо ми почали роботу."],
          ["Кому передаємо", "Ми не продаємо і не передаємо дані третім особам для їхніх власних цілей. Дані можуть обробляти постачальники, яких ми використовуємо як інструменти: хостинг сайту, поштовий сервіс, сервіс запису на зустріч (Cal.com), сервіс аналітики. Кожен отримує лише необхідний мінімум."],
          ["Скільки зберігаємо", "Переписку щодо заявки — до двох років з останнього контакту. Договори і рахунки — протягом строку, встановленого законом. Аналітику — до 14 місяців у знеособленому вигляді."],
          ["Ваші права", "Ви можете запросити копію своїх даних, виправлення, видалення чи обмеження обробки, а також відкликати згоду. Достатньо листа на hello@slapa.agency."]
        ]
      },
      {
        id: "cookies",
        title: "Політика cookie",
        lede: "Cookie — невеликі файли, які сайт зберігає у браузері. Ми ділимо їх на дві групи.",
        sections: [
          ["Обов'язкові", "Потрібні, щоб сайт працював: запам'ятовують вибрану мову і вашу відповідь у банері згоди. Їх не можна вимкнути — без них сайт не працюватиме коректно. Строк зберігання — до 12 місяців."],
          ["Аналітичні", "Підключаються лише після натискання «Прийняти». Показують знеособлену статистику: скільки людей відкрили сторінку, звідки прийшли, які розділи читали. Ми не використовуємо їх для рекламы і профілювання. Строк зберігання — до 14 місяців."],
          ["Як змінити вибір", "Натисніть «Налаштування cookie» у підвалі сайту — банер згоди з'явиться знову, і рішення можна змінити. Також cookie можна видалити в налаштуваннях браузера."],
          ["Сторонні сервіси", "Сторінка запису на зустріч відкривається через Cal.com і встановлює власні cookie, потрібні для роботи календаря. Їх використання описане в політиці Cal.com."],
          ["Якщо ви відмовилися", "Сайт продовжить працювати повністю. Ми просто не бачитимемо статистику вашого візиту."]
        ]
      },
      {
        id: "terms",
        title: "Угода користувача",
        lede: "Умови використання сайту і загальні правила роботи над проєктом.",
        sections: [
          ["Що робить сайт", "Сайт має інформаційний характер: розповідає про послуги і дає можливість надіслати заявку або вибрати час зустрічі. Надсилання форми не є договором і не зобов'язує жодну зі сторін."],
          ["Заявки і оцінки", "Оцінка, яку ми надсилаємо у відповідь на заявку, орієнтовна. Остаточний обсяг робіт, терміни і вартість фіксуються в договорі або рахунку до початку роботи."],
          ["Права на матеріали", "Тексти, зображення і доступи, які ви нам передаєте, залишаються вашою власністю. Готовий дизайн і верстка переходять до вас після повної оплати."],
          ["Наші приклади робіт", "Ми маємо право показувати виконаний проєкт у портфоліо і соцмережах. Якщо публікувати не можна, скажіть про це до початку роботи — зафіксуємо в договорі."],
          ["Вміст сайту", "Оформлення, тексти і логотип SLAPA належать агентству. Копіювання цілком без дозволу не допускається; посилатися на матеріали можна вільно."],
          ["Відповідальність", "Ми не відповідаємо за роботу сторонніх сервісів, на які ведуть посилання, і за наслідки змін, внесених у проєкт після здачі без нашої участі."]
        ]
      },
      {
        id: "security",
        title: "Безпека даних",
        lede: "Як ми поводимося з доступами і файлами проєкту.",
        sections: [
          ["Доступи", "Логіни до сайту, хостингу і домену зберігаємо в менеджері паролів і запитуємо лише на час робіт. За можливості просимо окремий обліковий запис з обмеженими правами замість головного адміністратора."],
          ["Після здачі проєкту", "Доступи повертаємо вам, а свої облікові записи видаляємо. На ваш запит видаляємо і робочі копії файлів."],
          ["Передача файлів", "Матеріали приймаємо за захищеними посиланнями або на пошту. Паролі просимо надсилати окремо від логінів і не залишати їх у переписці довше, ніж потрібно."],
          ["Сайт і з'єднання", "Сайт працює через HTTPS. Заявки надходять на робочу пошту з двофакторною аутентифікацією."],
          ["Якщо щось трапилося", "У разі інциденту, який може торкнутися ваших даних, повідомляємо вам протягом 72 годин і описуємо, що саме сталося і які заходи вжито."]
        ]
      }
    ]
  },

  hu: {
    updated: "Frissítve: 2026. augusztus 17.",
    controller: "SLAPA, hello@slapa.agency",
    docs: [
      {
        id: "privacy",
        title: "Adatvédelmi szabályzat",
        lede: "A dokumentum leírja, milyen adatokat kapunk, mire használjuk őket és mennyi ideig tároljuk.",
        sections: [
          ["Ki kezeli az adatokat", "Az adatkezelő a SLAPA ügynökség. Az adatkezeléssel kapcsolatos kérdésekkel írjon a hello@slapa.agency címre — három munkanapon belül válaszolunk."],
          ["Milyen adatokat kapunk", "Az űrlapról: név, elérhetőség (email vagy Telegram), az oldal linkje és a feladat leírása. Az analitikából, ha hozzájárult: anonim látogatási adatok — oldalak, forrás, eszköztípus. A levelezésből: amit Ön küld el."],
          ["Mire használjuk", "A megkeresés megválaszolása és az árajánlat elkészítése, a projekt vitele és a hozzá tartozó levelezés, számlázás és a könyvelési kötelezettségek teljesítése. Az analitikát csak arra használjuk, hogy lássuk, mely részeket olvassák."],
          ["Az adatkezelés jogalapja", "Az Ön hozzájárulása az űrlap elküldésekor és a nem szükséges cookie-k beállításakor, valamint a szerződés teljesítése, ha a munka elindult."],
          ["Kinek adjuk át", "Adatokat nem adunk el és nem adunk át harmadik félnek a saját céljaira. Az adatokat olyan szolgáltatók kezelhetik, amelyeket eszközként használunk: a weboldal hostingja, levelezőszolgáltatás, időpontfoglaló szolgáltatás (Cal.com), analitika. Mindegyik csak a szükséges minimumot kapja meg."],
          ["Meddig tároljuk", "A megkereséshez tartozó levelezést az utolsó kapcsolatfelvételtől számított két évig. A szerződéseket és számlákat a jogszabályi megőrzési ideig. Az analitikát legfeljebb 14 hónapig, anonim formában."],
          ["Az Ön jogai", "Kérheti adatai másolatát, javítását, törlését vagy a kezelés korlátozását, és visszavonhatja a hozzájárulását. Egy levél elég a hello@slapa.agency címre."]
        ]
      },
      {
        id: "cookies",
        title: "Cookie szabályzat",
        lede: "A cookie-k kis fájlok, amelyeket az oldal a böngészőben tárol. Két csoportra osztjuk őket.",
        sections: [
          ["Szükséges cookie-k", "Az oldal működéséhez kellenek: megjegyzik a választott nyelvet és a hozzájárulási sávban adott válaszát. Nem kapcsolhatók ki, mert nélkülük az oldal nem működik helyesen. Tárolási idő: legfeljebb 12 hónap."],
          ["Analitikai cookie-k", "Csak az „Elfogadom” gomb megnyomása után kapcsolódnak be. Anonim statisztikát mutatnak: hányan nyitották meg az oldalt, honnan érkeztek, mely részeket olvasták. Reklámra és profilozásra nem használjuk őket. Tárolási idő: legfeljebb 14 hónap."],
          ["Hogyan módosítható a döntés", "Kattintson a „Cookie beállítások” linkre az oldal alján — a hozzájárulási sáv újra megjelenik, és a döntés megváltoztatható. A cookie-k a böngésző beállításaiban is törölhetők."],
          ["Külső szolgáltatások", "Az időpontfoglaló oldal a Cal.com-on nyílik meg, és saját, a naptár működéséhez szükséges cookie-kat állít be. Ezek használatát a Cal.com szabályzata írja le."],
          ["Ha elutasítja", "Az oldal ugyanúgy teljes egészében működik. Csak nem látjuk az Ön látogatásának statisztikáját."]
        ]
      },
      {
        id: "terms",
        title: "Felhasználási feltételek",
        lede: "Az oldal használatának feltételei és a projektmunka általános szabályai.",
        sections: [
          ["Mit tesz az oldal", "Az oldal tájékoztató jellegű: bemutatja a szolgáltatásokat, és lehetőséget ad megkeresés küldésére vagy időpont választására. Az űrlap elküldése nem szerződés, és egyik felet sem kötelezi."],
          ["Megkeresések és árajánlatok", "A megkeresésre küldött becslés tájékoztató. A munka végleges terjedelmét, a határidőket és az árat a munka megkezdése előtt szerződésben vagy számlán rögzítjük."],
          ["Az anyagok jogai", "Az átadott szövegek, képek és hozzáférések az Ön tulajdonában maradnak. Az elkészült dizájn és kód a teljes kifizetés után kerül Önhöz."],
          ["Referenciáink", "Az elkészült projektet bemutathatjuk a portfóliónkban és a közösségi médiában. Ha ez nem lehetséges, jelezze a munka megkezdése előtt — a szerződésben rögzítjük."],
          ["Az oldal tartalma", "A SLAPA megjelenése, szövegei és logója az ügynökséghez tartoznak. Teljes egészében történő átvétel engedély nélkül nem megengedett; hivatkozni szabadon lehet."],
          ["Felelősség", "Nem vállalunk felelősséget a hivatkozott külső szolgáltatások működéséért, sem az átadás után, közreműködésünk nélkül végzett módosítások következményeiért."]
        ]
      },
      {
        id: "security",
        title: "Adatbiztonság",
        lede: "Hogyan kezeljük a hozzáféréseket és a projekt fájljait.",
        sections: [
          ["Hozzáférések", "A weboldal, a hosting és a domain belépési adatait jelszókezelőben tároljuk, és csak a munka idejére kérjük el. Ha lehet, a fő adminisztrátor helyett külön, korlátozott jogú fiókot kérünk."],
          ["A projekt átadása után", "A hozzáféréseket visszaadjuk, a saját fiókjainkat töröljük. Kérésre a munkapéldányokat is töröljük."],
          ["Fájlok átadása", "Az anyagokat védett linken vagy emailben fogadjuk. A jelszavakat kérjük a belépési nevektől külön küldeni, és a szükségesnél tovább ne hagyni a levelezésben."],
          ["Az oldal és a kapcsolat", "Az oldal HTTPS-en működik. A megkeresések kétfaktoros hitelesítéssel védett munkapostára érkeznek."],
          ["Ha incidens történik", "Az Ön adatait érintő incidensről 72 órán belül tájékoztatjuk, és leírjuk, mi történt és milyen intézkedéseket tettünk."]
        ]
      }
    ]
  },

  en: {
    updated: "Updated: 17 August 2026",
    controller: "SLAPA, hello@slapa.agency",
    docs: [
      {
        id: "privacy",
        title: "Privacy policy",
        lede: "This document describes what data we receive, why we need it and how long we keep it.",
        sections: [
          ["Who processes the data", "The data controller is SLAPA. For any question about processing, write to hello@slapa.agency — we reply within three working days."],
          ["What we receive", "From the request form: name, contact (email or Telegram), a link to your site and a description of the task. From analytics, if you consented: anonymised visit data — pages, referral source, device type. From correspondence: whatever you send us."],
          ["Why we need it", "To answer your request and prepare an estimate, to run the project and the correspondence around it, to invoice and to meet accounting requirements. Analytics is used only to see which parts of the site are read."],
          ["Legal basis", "Your consent when submitting the form and when enabling non-essential cookies, and performance of a contract once work has started."],
          ["Who we share with", "We do not sell data or pass it to third parties for their own purposes. Data may be processed by providers we use as tools: site hosting, email service, scheduling service (Cal.com), analytics. Each receives only the necessary minimum."],
          ["Retention", "Correspondence about a request: up to two years from the last contact. Contracts and invoices: for the period required by law. Analytics: up to 14 months, anonymised."],
          ["Your rights", "You can request a copy of your data, correction, deletion or restriction of processing, and withdraw consent. An email to hello@slapa.agency is enough."]
        ]
      },
      {
        id: "cookies",
        title: "Cookie policy",
        lede: "Cookies are small files a site stores in your browser. We split them into two groups.",
        sections: [
          ["Essential", "Needed for the site to work: they remember the selected language and your answer in the consent banner. They cannot be turned off, as the site would not work correctly without them. Stored for up to 12 months."],
          ["Analytics", "Enabled only after you press Accept. They show anonymised statistics: how many people opened a page, where they came from, which sections they read. We do not use them for advertising or profiling. Stored for up to 14 months."],
          ["Changing your choice", "Click Cookie settings in the footer — the consent banner appears again and the decision can be changed. Cookies can also be deleted in your browser settings."],
          ["Third-party services", "The scheduling page opens through Cal.com and sets its own cookies needed for the calendar to work. Their use is described in the Cal.com policy."],
          ["If you decline", "The site keeps working in full. We simply will not see statistics for your visit."]
        ]
      },
      {
        id: "terms",
        title: "Terms of use",
        lede: "Conditions for using this site and the general rules of working on a project.",
        sections: [
          ["What the site does", "The site is informational: it describes the services and lets you send a request or pick a meeting time. Submitting the form is not a contract and obliges neither side."],
          ["Requests and estimates", "The estimate we send in reply to a request is indicative. Final scope, timelines and price are fixed in a contract or invoice before work starts."],
          ["Rights to materials", "Texts, images and credentials you hand over remain your property. The finished design and code pass to you after full payment."],
          ["Our portfolio", "We may show a completed project in our portfolio and on social media. If publishing is not possible, tell us before work starts and we will record it in the contract."],
          ["Site content", "The SLAPA design, texts and logo belong to the agency. Wholesale copying without permission is not allowed; linking to the material is free."],
          ["Liability", "We are not responsible for the operation of third-party services we link to, or for the consequences of changes made to a project after handover without our involvement."]
        ]
      },
      {
        id: "security",
        title: "Data security",
        lede: "How we handle credentials and project files.",
        sections: [
          ["Credentials", "Logins for the site, hosting and domain are kept in a password manager and requested only for the duration of the work. Where possible we ask for a separate limited account rather than the main administrator."],
          ["After handover", "We return the credentials and delete our own accounts. On request we also delete our working copies of the files."],
          ["File transfer", "We accept materials via protected links or email. We ask that passwords be sent separately from logins and not left in correspondence longer than needed."],
          ["Site and connection", "The site runs over HTTPS. Requests arrive at a work mailbox protected by two-factor authentication."],
          ["If an incident happens", "If an incident could affect your data, we notify you within 72 hours and describe what happened and what measures were taken."]
        ]
      }
    ]
  }
};

export default L;
