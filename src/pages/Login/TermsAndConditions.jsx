import { useState } from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardHeader,
  CFormCheck,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleCheckChange = () => {
    setAceptoTerminos(!aceptoTerminos);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CCard style={{ width: "75%" }}>
        <CCardHeader>
          Términos y Condiciones de Uso para la Aplicación de Análisis y
          Visualización de Datos
        </CCardHeader>
        <CCardBody className="overflow-y-scroll h-96">
          <CCardText>
            <p className="mb-1">
              Fecha de entrada en vigencia: [Fecha de entrada en vigencia]
            </p>
            <p className="mb-3">
              Estos Términos y Condiciones de Uso ("Términos") regulan el acceso
              y uso de la aplicación de análisis y visualización de datos ("la
              Aplicación") proporcionada por [Nombre de la Empresa], con
              domicilio en [Dirección] ("nosotros", "nuestro" o "la Empresa").
              Al acceder o utilizar la Aplicación, usted ("el Usuario") acepta
              cumplir con estos Términos.
            </p>
            <section>
              <h2 className="text-2xl font-bold mb-1">
                Privacidad y Protección de Datos
              </h2>
              <p className="mb-1">
                a. Todos los datos proporcionados y generados por la Aplicación
                serán tratados de conformidad con nuestra Política de
                Privacidad.
              </p>
              <p className="mb-3">
                b. Nos comprometemos a implementar medidas de seguridad
                adecuadas para proteger los datos del Usuario contra accesos no
                autorizados, divulgación, alteración o destrucción.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-1">Acceso y Uso</h2>
              <p className="mb-1">
                a. El Usuario acepta utilizar la Aplicación únicamente con fines
                legítimos y de acuerdo con estos Términos.
              </p>
              <p className="mb-3">
                b. El acceso a ciertas funciones de la Aplicación puede requerir
                registro y creación de una cuenta. El Usuario es responsable de
                mantener la confidencialidad de la información de la cuenta.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">Propiedad Intelectual</h2>
              <p className="mb-3">
                a. La Aplicación y su contenido, incluyendo pero no limitado a,
                textos, gráficos, logotipos, imágenes y software, están
                protegidos por derechos de propiedad intelectual y son propiedad
                exclusiva de la Empresa.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-1">
                Limitaciones de Responsabilidad
              </h2>
              <p className="mb-1">
                a. La Empresa no será responsable por daños directos,
                indirectos, incidentales, consecuentes o especiales que surjan
                del uso o la imposibilidad de uso de la Aplicación.
              </p>
              <p className="mb-3">
                b. La Empresa no garantiza la exactitud, integridad o actualidad
                de la información proporcionada por la Aplicación.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-1">
                Suspensión y Terminación
              </h2>
              <p className="mb-3">
                a. La Empresa se reserva el derecho de suspender o terminar el
                acceso del Usuario a la Aplicación en caso de incumplimiento de
                estos Términos o por motivos de seguridad.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-1">
                Modificaciones de los Términos
              </h2>
              <p className="mb-3">
                a. Nos reservamos el derecho de modificar estos Términos en
                cualquier momento. Las modificaciones entrarán en vigencia
                después de la publicación de los Términos actualizados en la
                Aplicación.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-1">
                Ley Aplicable y Jurisdicción
              </h2>
              <p className="mb-3">
                a. Estos Términos se regirán e interpretarán de acuerdo con las
                leyes del Mexico, y cualquier disputa estará sujeta a la
                jurisdicción exclusiva de los tribunales de Saltillo, Coahuila.
              </p>
            </section>
            <p className="mb-3">
              Al utilizar la Aplicación, el Usuario reconoce haber leído,
              entendido y aceptado estos Términos. Si no está de acuerdo con
              estos Términos, no debe utilizar la Aplicación.
            </p>
          </CCardText>
          <CFormCheck
            className="mb-3"
            id="flexCheckDefault"
            color="danger"
            value={aceptoTerminos}
            label="Acepto términos y condiciones"
            onChange={handleCheckChange}
          />
          <div className="flex gap-4 mb-6">
            <CButton
              variant="outline"
              color="primary"
              onClick={() => {
                navigate("/dashboard/cadets");
              }}
              disabled={!aceptoTerminos}
            >
              Entrar a la plataforma
            </CButton>
            <CButton
              variant="outline"
              color="danger"
              onClick={() => {
                navigate("/");
              }}
              disabled={aceptoTerminos}
            >
              Salir
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default TermsAndConditions;
