import './InputForm.css';

function InputForm({inputType, inputName, inputLabel, className, inputId, validationRules, register, errors}) {

    return (

        <>
            <label htmlFor={inputId} className={className}>
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] && <p className="error-message">{errors[inputName].message}</p>}
        </>
    );
}

export default InputForm;