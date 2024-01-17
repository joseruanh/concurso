function content()
{
    let a = window.document.getElementById('res')
    a.innerHTML = `
    
    <div>
    
            <p>
            <button class="leis" onclick="lei1()"> Lei 9503 de 23 de setembro de 1997 - Código de Trânsito Brasileiro </button> <br><br>
            
            <a href="https://www.gov.br/prf/pt-br/concurso-2021/resolucoes/resolucao-24-1998" target="_blank"> <button class="leis"> Resolução Nº 24/1998 </button> </a> <br><br>
            
            <a href="https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-26-de-21-de-maio-de-1998" target="_blank"> <button class="leis">Resolução do Contran Nº 26/1988 </button></a> <br><br>
            
            Resolução Contran Nº 36/1998 <br><br>
            
            Resolução Contran 108/2000 <br><br>
            
            Resolução Contran nº 110/00 <br><br>
            
            Resolução 242/2007 <br><br>
            
            Resolução 432/2013 <br><br>
            
            Resolução 508/2014 <br><br>
            
            Resolução Contran 581/2016 <br><br>
            
            Resolução Contran 811/2020 <br><br>
            
            Resolução Contran 819/2021 <br><br>
            
            Resolução Contran 900/2022 <br><br>
            
            Resolução Contran 911/2022 <br><br>
            
            Resolução Contran 914/2022 <br><br>
            
            Resolução Contran 918/2022 <br><br>
            
            Resolução Contran 919/2022 <br><br>
            
            Resolução Contran 930/2022 <br><br>
            
            Resolução Contran 940/2022 <br><br>
            
            Resolução Contran 955/2022 <br><br>
            
            Resolução Contran 958/2022 <br><br>
            
            Resolução Contran 965/2022 <br><br>
            
            Resolução Contran 967/2022 <br><br>
            
            Resolução Contran 969/2022 <br><br>
            
            Resolução Contran 976/2022 <br><br>
            
            Resolução Contran 985/2022 <br><br>
            
            Resolução Contran 991/2023 <br><br>
            
            Resolução Contran 993/2023 <br><br>
            
            Resolução Contran 996/2023 <br><br>
            
            </p>


    </div>
    
    
    `
}

function lei1()
{
    window.scrollTo(0,100);
    let a = window.document.getElementById("res")
    a.innerHTML = `

    <iframe src="https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm"></iframe>
    
    
    `
}

function rel()
{
    location.reload()
}