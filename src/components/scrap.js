
setFormErrors({...formErrors, ['titleHasError']: "is-valid" ,['descriptionHasError']: "is-valid"});


<div className="form-group">
    <button
        onClick={addPost}
        type="submit" className="btn btn-primary btn-block"> Add</button>

    <button
        onClick={allPost}
        type="submit" className="btn btn-primary btn-block"> Length</button>
</div>