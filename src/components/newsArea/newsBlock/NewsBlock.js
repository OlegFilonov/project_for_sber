import React from 'react'

export default class NewsBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>Дата</div>
                <div>Заголовок</div>
                <div>Текст статьи</div>
                <div>
                    <button>Издание</button>
                    <button>Ссылка</button>
                    <button>Сохранить</button>
                </div>
            </div>
        )
    }
}