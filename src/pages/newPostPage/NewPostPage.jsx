import './NewPostPage.css';
import { useForm } from 'react-hook-form';
import InputForm from "../../components/form-components/inputForm/InputForm.jsx";
import TextAreaForm from "../../components/form-components/textAreaForm/TextAreaForm.jsx";
import PostButton from "../../components/buttons/postButton/PostButton.jsx";

function NewPostPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
    }

    return (

        <>
            <h1>Blogpost toevoegen:</h1>

            <form className="post-form" onSubmit={handleSubmit(handleFormSubmit)}>

                <InputForm
                inputType="text"
                inputName="title"
                inputId="title-field"
                inputLabel="Titel "
                className="title-field"
                register={register}
                errors={errors}
                validationRules={{
                    required: {value: true, message: 'Titel is verplicht'
                }, maxLength: {
                       value: 50, message: 'Titel mag maximaal 50 tekens bevatten'
                    }
                }}
                />

                <InputForm
                    inputType="text"
                    inputName="sub-title"
                    inputId="sub-title-field"
                    inputLabel="Ondertitel "
                    className="sub-title-field"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: {value: true, message: 'Ondertitel is verplicht'
                        }, maxLength: {
                            value: 100, message: 'Ondertitel mag maximaal 100 tekens bevatten'
                        }
                    }}
                />

                <InputForm
                    inputType="text"
                    inputName="author"
                    inputId="author-field"
                    inputLabel="Auteur "
                    className="author-field"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: {value: true, message: 'Auteur is verplicht'
                        }, maxLength: {
                            value: 50, message: 'Auteur mag maximaal 50 tekens bevatten'
                        }
                    }}
                />

                <TextAreaForm
                ClassName="message-field"
                textAreaLabel="Bericht "
                textAreaId="message"
                rows={10}
                cols={100}
                placeholder="Schrijf hier je bericht... "
                textAreaName="message"
                register={register}
                errors={errors}
                validationRules={{
                    required: {value: true, message: 'Bericht is verplicht'
                    }, minLength: {
                        value: 300, message: 'Bericht moet minimaal 300 tekens bevatten'
                    }
                    , maxLength: {
                        value: 2000, message: 'Blogpost bericht mag maximaal 2000 tekens bevatten'
                    }
                }}
                />

                <PostButton
                    text="Versturen"
                />
            </form>

        </>
    );



}

export default NewPostPage;