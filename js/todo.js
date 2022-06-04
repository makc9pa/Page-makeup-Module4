export const todo = () => {
    const todoForm = document.querySelector('#form-todo');
    const author = document.getElementById('author');
    const post = document.getElementById('post');
    const list = document.querySelector('.todo__list');
    const count = document.querySelector('.todo__count');

    const base = {
        init() {
            this.todo = this.getTodoLS();
        },
        todo: [],
        check(id) {
            for (let i = 0; i < this.todo.length; i++) {
                if (this.todo[i].id === id) {
                    this.todo[i].ready = true;
                }
            }
            this.setTodoLS();
        },
        addTodo(author, post) {
            const todo = {
                id: 'td' + (Date.now()),
                author,
                post,
                ready: false,
            }
            this.todo.push(todo);
            this.setTodoLS();
            return todo;
        },
        getTodoLS() {
            if (localStorage.getItem('todo')) {
                return JSON.parse(localStorage.getItem('todo'));
            }
        
            return []
        },
        setTodoLS() {
            localStorage.setItem('todo', JSON.stringify(this.todo))
        }
    };

    const addTodo = e => {
        e.preventDefault();

        const authorText = author.value;
        const postText = post.value;

        const objTodo = base.addTodo(authorText, postText);
        const todoLi = createTodo(objTodo);

        list.append(todoLi);
        renderCount();
        todoForm.reset()
    };

    const createTodo = ({ ready, author, post, id }) => {
        const todoItem = `
            <article class="post ${ready ? 'post_complete' : ''}">
                <h3 class="post__author">${author}</h3>
                <p class="post__todo">${post}</p>
                ${!ready ?
                    `<button class="post__ready"
                    type="button"
                    data-id="${id}"
                    >✔</button>` :
                    ''
                }
            </article>`;

        const li = document.createElement('li');
        li.classList.add('todo__list-item');
        li.innerHTML = todoItem;

        return li;
    };

    const renderTodo = () => {
        base.init();
        for (let i=0; i < base.todo.length; i++) {
            const todoLi = createTodo(base.todo[i]);
            list.append(todoLi);
        }
    };

    const renderCount = () => {
        count.textContent = changeCount();
    }

    const checkTodo = e => {
        const btn = e.target.closest('.post__ready');

        if (btn) {
            const post = btn.closest('.post');
            btn.remove();
            post.classList.add('post_complete');
            const id = btn.dataset.id;
            base.check(id);
        }
    };

    const changeCount = () => base.todo.length;


    renderTodo();
    renderCount();

    todoForm.addEventListener('submit', addTodo);
    list.addEventListener('click', checkTodo);
};