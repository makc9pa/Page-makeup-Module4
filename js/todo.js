export const todo = () => {
    const todoForm = document.querySelector('#form-todo');
    const author = document.getElementById('author');
    const post = document.getElementById('post');
    const count = document.querySelector('.todo__count');
    let list = document.querySelector('.todo__list');

    const base = {
        init() {
            this.todo = this.getTodoLS();
        },
        todo: [],
        check(id) {
            for (let i = 0; i < this.todo.length; i++) {
                if (this.todo[i].id === id) {
                    this.todo[i].ready = true;
                    this.todo[i].forRemove = true;
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
                forRemove: false
            }
            this.todo.push(todo);
            this.setTodoLS();
            return todo;
        },
        getTodoLS() {
            if (localStorage.getItem('todo')) {
                return JSON.parse(localStorage.getItem('todo'));
            }
            return [];
        },
        setTodoLS() {
            localStorage.setItem('todo', JSON.stringify(this.todo));
        },
        deleteTodoLS(removableId) {
            const storedLS = JSON.parse(localStorage.getItem('todo'));
            const ids = storedLS.map(item => item.id);
            const index = ids.findIndex(id => id == removableId);

            storedLS.splice(index, 1);
            localStorage.setItem('todo', JSON.stringify(storedLS));
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
                    `<button class="post__ready_to_delete"
                    type="button"
                    data-id="${id}"
                    >X</button>`
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

    const removeTodoLi = () => {
        list.innerHTML = '';
    }

    const renderCount = () => {
        count.textContent = changeCount();
    };

    const checkTodo = e => {
        const btnReady = e.target.closest('.post__ready');
        const btnDelete = e.target.closest('.post__ready_to_delete');

        if (btnReady) {
            const post = btnReady.closest('.post');
            const id = btnReady.dataset.id;

            post.classList.add('post_complete');
            btnReady.classList.remove('post__ready');
            btnReady.classList.add('post__ready_to_delete');
            btnReady.textContent = 'X';
            base.check(id);
        }

        if (btnDelete) {
            const id = btnDelete.dataset.id;
            btnDelete.remove();
            base.deleteTodoLS(id);
            removeTodoLi();
            renderTodo();
            renderCount();
        }
    };

    const changeCount = () => base.todo.length;


    renderTodo();
    renderCount();

    todoForm.addEventListener('submit', addTodo);
    list.addEventListener('click', checkTodo);
};