import React from "react";

export default function AuthForm({
    title,
    buttonText,
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    linkText,
    linkHref,
    children

}) {
    return(
     <div className="auth-page"> 
     <div className="auth-card">
        <h2>NewTech</h2>
        <form onSubmit={onSubmit} className="auth-Form">
            <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="input" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn" type="submit">Entrar</button>
        </form>

        {children}

        <p style={{marginTop: '1rem', textAlign: 'center'}}>
        <a href={linkHref}>Criar conta</a>
        </p>
     </div>
     </div>
    )
}