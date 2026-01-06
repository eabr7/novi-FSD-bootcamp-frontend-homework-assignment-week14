import './NewPostPage.css';
import { useForm } from 'react-hook-form';
import InputForm from "../../components/form-components/inputForm/InputForm.jsx";
import TextAreaForm from "../../components/form-components/textAreaForm/TextAreaForm.jsx";
import PostButton from "../../components/buttons/postButton/PostButton.jsx";
import {readTimeCalculator} from "../../helpers/readTimeCalculator.js";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

function NewPostPage() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        const dateAndTime = new Date().toISOString();
        const newPost = {...data, comments: 0, shares: 0, created: dateAndTime, readTime: readTimeCalculator(data.content)}
        console.log(newPost);
        setSuccess(true);
        reset();
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/posts');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    return (

        <>
            <h1>Blogpost toevoegen:</h1>

            {success && (
                <p className="success-message">
                    Blogpost succesvol toegevoegd! Je wordt doorgestuurd…
                </p>
            )}

            <form className="post-form" onSubmit={handleSubmit(handleFormSubmit)}>

                <InputForm
                inputType="text"
                inputName="title"
                inputId="title-field"
                inputLabel="Titel"
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
                    inputName="subTitle"
                    inputId="subTitle-field"
                    inputLabel="Ondertitel"
                    className="subTitle-field"
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
                    inputLabel="Auteur"
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
                className="content-field"
                textAreaLabel="Bericht"
                textAreaId="content"
                rows={10}
                cols={100}
                placeholder="Schrijf hier je bericht... "
                textAreaName="content"
                register={register}
                errors={errors}
                validationRules={{
                    required: {value: true, message: 'Bericht is verplicht'
                    }, minLength: {
                        value: 300, message: 'Bericht moet minimaal 300 tekens bevatten'
                    }
                    , maxLength: {
                        value: 2000, message: 'Bericht mag maximaal 2000 tekens bevatten'
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