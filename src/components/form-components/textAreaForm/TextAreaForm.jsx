import './TextAreaForm.css';

function TextAreaForm({textAreaId, className, textAreaLabel, rows, cols, placeholder, register, textAreaName, errors, validationRules}) {

    return (
        <>
            <label htmlFor={textAreaId} className={className}>
                {textAreaLabel}
            <textarea
                id={textAreaId}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                {...register(textAreaName, validationRules)}
            />
            </label>
            {errors[textAreaName] && <p className="error-message">{errors[textAreaName].message}</p>}
        </>
    );
}

export default TextAreaForm;