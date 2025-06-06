import Input from './input/Input';

function Inputs({ email, senha, emailError, senhaError, EmailChange, SenhaChange }) {

    return <>
        <div>
            <Input
                type="text"
                value={email}
                onChange={EmailChange}
                error={emailError}
            />

            <Input
                type="password"
                value={senha}
                onChange={SenhaChange}
                error={senhaError}
            />
        </div>
    </>
}

export default Inputs