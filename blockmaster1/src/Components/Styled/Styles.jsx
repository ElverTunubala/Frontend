import styled from 'styled-components'

const PerfilStyle = styled.div`
display:flex;
padding:20px 10px;
font-size:40px;
text-align:center;
color:white;
    &:hover{
        color:blue;
    }
`;

const ContenedorCards = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, 220px);
grid-gap:20px;
padding:20px;
justify-content:center;
`;

const ContTarjetas = styled.div`
display:flex;
justify-content:center;

`;

const ModalHeaderStyle = styled.div`
    position:absolute;
    left:97%;
    top:2%;  
`;

const buttonCerrarModal = styled.input`
 border:none;
 background:transparent;
 color:grey;
    &:hover{
        color:#FFFFFA
    }
`;

const ModalBodyStyle = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    color:white;
    padding:20px;
`;

const ModalBodyOverviewStyle = styled.div`
    display: flex;    
    flex-direction: column;
    text-align:justify;
    padding:20px;
    align-items:center
`;

const ModalBodyImgStyle = styled.img`
    width:30%;
`;

const BtnTrailerStyle = styled.input`
    border:none;
    margin:10px;
    background:#FED941;
    width:45%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`;

const BtnDespuesStyle = styled.input`
    border:none;
    margin:10px;
    background:#0C0E16;
    width:45%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FED941;
`;

const BadgeStyle = styled.span`
    position:relative;
    top:20%;
    width:114px;
    height:45px;
    background: rgba(0, 0, 0, 0.73);
    border-radius: 40px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    display:flex;
    align-items:center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFE;
    border: 1px solid #FED941;
    border-left:none;
    justify-content:center;
`;




export const ContCards = ContenedorCards
export const Tarjetas = ContTarjetas
export const ModalBody = ModalBodyStyle
export const ModalBodyOverview = ModalBodyOverviewStyle
export const ModalHeader = ModalHeaderStyle
export const ModalBodyImg = ModalBodyImgStyle

export const InputClose = buttonCerrarModal
export const BtnTrailer = BtnTrailerStyle
export const BtnDespues = BtnDespuesStyle
export const Badge = BadgeStyle
export const Perfil = PerfilStyle

/* -----------------------------------------------------LOGIN Y REGISTER------------------------------------- */
const ContenedorLogin = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
    width:100%;
`;
const ContenedorFormulario = styled.form`
    display:flex;
    flex-direction:column;
    width:80%;
    padding:20px 40px;
    align-items:center;
`;

const LabelsStyle = styled.label`
    padding:20px 10px;
    text-align:left;
    width:100%;
    border-radius:10px;
`;
const InputsStyle = styled.input`
    padding:10px 5px;
    text-align:left;
    width:100%;
    border-radius:10px;
`;
const ButtonsStyle = styled.input`
    padding:10px;
    margin:10% 0 5% 0;
    width:60%;
    border-radius:10px;
    background:#FED941;
`;

export const Contenedor = ContenedorLogin
export const Formulario = ContenedorFormulario
export const Labels = LabelsStyle
export const Inputs = InputsStyle
export const Buttons = ButtonsStyle

/* --------------------------------------------------PERFIL-------------------------------------------------- */
const ContenedorPerfilStyle = styled.div`
    width:70%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:40px;
    color:white;
`;

const ContenedorSpansStyle = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
`;

const ImgPerfilStyle = styled.img`
    border-radius:100%;
    width:170px;
    height:170px;
    object-fit:cover;
    margin-bottom:40px;

`;

const LabelPerfilStyle = styled(LabelsStyle)`
    color:white
`;

const FormPerfilStyle = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const InputFormPerfilStyle = styled.input`
    width:70%;
    margin:auto;
    padding:8px;
    border-radius:10px;
`;
const LabelFormPerfilStyle = styled.label`
    padding:20px 10px;
    text-align:center;
    width:100%;
    border-radius:10px;
    color:white;
`;
const ButtonFormPerfilStyle = styled(ButtonsStyle)`
    width:40%;
    border-radius:10px;
    color:gray;
    &:hover{
        background:red;
        color:white;
    }
`;

const ContReturnHomeStyle = styled.div`
    padding:0 40px;
    width:100%;
    text-align:center;
    margin-top:10px
    
`;

const SpanEditarStyle = styled.span`
    color:white;
    border:2px solid white;
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    cursor:pointer;
        &:hover{
            color:white;
            background:blue;
        }
`;

const SpanEliminarStyle = styled.span`
    color:white;
    border:2px solid white;
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        color:white;
        background:red;
    }
`;

export const ImgPerfil = ImgPerfilStyle
export const ContenedorPerfil = ContenedorPerfilStyle
export const ContenedorSpans = ContenedorSpansStyle
export const LabelPerfil = LabelPerfilStyle
export const FormPerfil = FormPerfilStyle
export const InputFormPerfil = InputFormPerfilStyle
export const LabelFormPerfil = LabelFormPerfilStyle
export const ButtonFormPerfil = ButtonFormPerfilStyle
export const ReturnHome = ContReturnHomeStyle
export const SpanEditar = SpanEditarStyle
export const SpanEliminar = SpanEliminarStyle


/* -------------------------------------------------CARDS------------------------------------------------- */

const ImgCardStyle = styled.img`
    border-radius:10px;
    box-shadow: 0px 7px 26px 4px rgba(0,0,0,0.51);
`;

export const ImgCard = ImgCardStyle

/* -------------------------------------------------NAVBAR------------------------------------------------- */
 const InputSearchStyle = styled.input`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    width:90%;
    padding:10px;
    border:none;
 `;
 const ButtonSearchStyle = styled.button`
    width:10%;
    margin:auto;
    background:blue;
    padding:12px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border:none;
 `;

 const FormSearchStyle = styled.form`
    border: 1px solid blue;
    border-radius:10px;
    width:50%;
    bakcground:#FED941;
 `;

 export const InputSearch = InputSearchStyle
 export const ButtonSearch = ButtonSearchStyle
 export const FormSearch = FormSearchStyle



 const ContSwiperStyle = styled.div`
    width:500%;
    
 `;

 export const ContSpinner = styled.div`
    margin-bottom:100px;
    display:flex;
    justify-content:center;
    align-items:center;
 `;

 const ImgSwiperStyle = styled.img`
    height:320px;
    object-fit:cover;
    width:100%;   
 `;

 export const ContSwiper = ContSwiperStyle
 export const ImgSwiper = ImgSwiperStyle


 export const FontNav = styled.div`
 font-family: 'Inter', sans-serif;
 `;

 export const H1SeccionPeliculas =  styled.h1`
   color:white;
   font-family: 'Montserrat', sans-serif; 
   padding: 10px 20px 0 20px;
 `;