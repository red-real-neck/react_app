import './Post-add-form.css'

function PostAddForm() {
    return (
        <form action="" className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете чейчас?"
                className="form-control new-post-label"
            />
            <button 
                type ="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    );
}

export default PostAddForm;