import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      title: "С чего начать работу с 1С-Товары?",
      content: "",
    },
    {
      title: "Как подключить 1С-Ритейл Чекер и 1С-Товары?",
      content: `Для этого подключите бесплатную пачку товаров "1С-Ритейл Чекер".\n\nКаждую неделю они будут присылать письма с рекомендациями:\n- какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;\n- какие товары уже не продаются, и какие следует заменить в ассортименте;\n- какие товары стоит пересчитать, чтобы лучше управлять и проводить учёт.`,
    },
    {
      title: "Средний чек, о чем нам может рассказать?",
      content: "",
    },
    {
      title: "Сценарии автозаказа сервиса 1С-Товары",
      content: "",
    },
    {
      title: "Как подключить 1С-Ритейл Чекер и 1С-Товары?", // Повтор вопроса
      content: "",
    },
    {
      title: "Методы и формулы расчета торговой наценки",
      content: "",
    },
  ];

  const articles = [
    {
      title: "Методы и формулы расчета торговой наценки",
      link: "#",
    },
    {
      title: "Ассортимент продуктового ассортимента",
      link: "#",
    },
    {
      title: "Что такое сезонность продаж",
      link: "#",
    },
  ];
//asdsadsadsa
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ответы на вопросы</h2>
        <div className="space-y-2">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 font-medium hover:bg-gray-100 flex justify-between items-center"
              >
                <span>{q.title}</span>
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && q.content && (
                <div className="p-4 text-sm whitespace-pre-line text-gray-700 border-t bg-gray-50">
                  {q.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">База знаний</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
            Все статьи
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-base mb-2">
                  {article.title}
                </h3>
                <a
                  href={article.link}
                  className="text-green-600 font-medium hover:underline"
                >
                  Читать статью
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
