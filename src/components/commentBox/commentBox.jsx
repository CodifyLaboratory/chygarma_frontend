import css from './commentBox.module.css'

function CommentBox() {
    return (
        <div className={css.container}>
            <div className={css.words}>“Мне очень нравятся его работы он меня вдохнавляет и он классный и смелый”</div>
            <div className={css.author}>Мамашов арслан</div>
        </div>
    );
}

export default CommentBox;
