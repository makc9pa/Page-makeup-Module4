const app = document.querySelector('.app')
const btn = document.querySelector('.app__btn')

const base = {
    list: [
        {
            url: 'https://images.unsplash.com/photo-1645125302224-6331dc482d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Скульптура'
        },
        {
            url: 'https://images.unsplash.com/photo-1536827345486-a521cd3ebeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Девочка'
        },
        {
            url: 'https://images.unsplash.com/photo-1576668275786-5b5a633d9c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Машина'
        },
        {
            url: 'https://images.unsplash.com/photo-1589876876491-df78ff60e196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Пейзаж'
        },
        {
            url: 'https://images.unsplash.com/photo-1624569239444-c23a39eb7e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Акварель'
        },
        {
            url: 'https://images.unsplash.com/photo-1578318104175-3e64487847b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Сити'
        },
        {
            url: 'https://images.unsplash.com/photo-1617994396241-8c342aa4daea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Большая рыба'
        },
        {
            url: 'https://images.unsplash.com/photo-1568833172224-10cf0a1d9be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Поезд'
        },
    ]
}

function addPics(e) {
    e.preventDefault();

    const ul = document.createElement('ul');
    let addUl = [];

    ul.style.listStyle = 'none';

    base.list.forEach(item => {
        let elem = `
        <li>
            <figure>
                <p><img src="${item.url}" alt="${item.title}"></p>
                <figcaption>${item.title}</figcaption>
            </figure>
        </li>`;
        addUl.push(elem);
    })

    ul.innerHTML = addUl.join('');
    app.append(ul);
}

btn.addEventListener('click', addPics);