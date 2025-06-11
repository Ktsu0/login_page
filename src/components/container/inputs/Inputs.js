import Input from './../../ui/input/Input'

function Inputs({ email, senha, emailError, senhaError, EmailChange, SenhaChange }) {

    return <>
        <div>
            <Input
                type="text"
                inputType="text"
                value={email}
                onChange={EmailChange}
                error={emailError}
            />

            <Input
                type="password"
                inputType="password"
                value={senha}
                onChange={SenhaChange}
                error={senhaError}
            />
        </div>
    </>
}

export default Inputs