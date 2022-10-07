//задание 9.1
//Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDom.querySelector("list");

const result = {
  list: [
    { name: listNode.children[0].children[0].children[0].textContent + ' ' +
            listNode.children[0].children[0].children[1].textContent,
      age: listNode.children[0].children[1].textContent,
      prof: listNode.children[0].children[2].textContent,
      lang: listNode.children[0].children[0].getAttribute('lang')
    },
    { name: listNode.children[1].children[0].children[0].textContent + ' ' +
            listNode.children[1].children[0].children[1].textContent,
      age: listNode.children[1].children[1].textContent,
      prof: listNode.children[1].children[2].textContent,
      lang: listNode.children[1].children[0].getAttribute('lang')
    }
  ]
}

console.log(result);