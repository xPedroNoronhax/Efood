import { usePurchaseMutation } from "../../services/api";
import { CartButton, SideBar } from "../Cart/styles";
import { Conclusion, DeliveryForm, PaymentForm } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation();
  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      houseNumber: "",
      houseComplement: "",
      cardName: "",
      cardNumber: "",
      securityKey: "",
      expiredMonth: "",
      expiredYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(9, "O cep precisa conter 9 caracteres")
        .max(9, "O cep precisa conter 9 caracteres")
        .required("O campo é obrigatório"),
      houseNumber: Yup.string().required("O campo é obrigatório"),

      cardName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      securityKey: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      expiredMonth: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      expiredYear: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            city: values.city,
            description: values.address,
            number: parseInt(values.houseNumber),
            zipCode: values.zipCode,
            complement: values.houseComplement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: parseInt(values.securityKey),
            expires: {
              month: 12,
              year: 2222,
            },
          },
        },
        products: [
          {
            id: 1,
            price: 100,
          },
        ],
      });
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return "";
  };
  return (
    <SideBar>
      <DeliveryForm onSubmit={form.handleSubmit}>
        <h3>Entrega</h3>
        <label htmlFor="fullName">Quem irá receber</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={form.values.fullName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage("fullName", form.errors.fullName)}</small>
        <label htmlFor="adress">Endereço</label>
        <input
          id="address"
          type="text"
          name="address"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage("address", form.errors.address)}</small>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage("city", form.errors.city)}</small>
        <div>
          <div>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage("zipCode", form.errors.zipCode)}</small>
          </div>
          <div>
            <label htmlFor="houseNumber">Número</label>
            <input
              id="houseNumber"
              type="text"
              name="houseNumber"
              value={form.values.houseNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("houseNumber", form.errors.houseNumber)}
            </small>
          </div>
        </div>
        <label htmlFor="houseComplement">Complemento</label>
        <input
          id="houseComplement"
          type="text"
          name="houseComplement"
          value={form.values.houseComplement}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />

        <CartButton>Continuar com o pagamento</CartButton>
        <CartButton>Voltar para o carrinho</CartButton>
      </DeliveryForm>
      <PaymentForm onSubmit={form.handleSubmit}>
        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
        <label htmlFor="cardName">Nome no cartão</label>
        <input type="text" />
        <div className="infos">
          <div>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("cardNumber", form.errors.cardNumber)}
            </small>
          </div>
          <div>
            <label htmlFor="securityKey">CVV</label>
            <input
              id="securityKey"
              type="text"
              name="securityKey"
              value={form.values.securityKey}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("securityKey", form.errors.securityKey)}
            </small>
          </div>
        </div>
        <div className="expiredInfos">
          <div>
            <label htmlFor="expiredMonth">Mês de vencimento</label>
            <input
              id="expiredMonth"
              type="text"
              name="expiredMonth"
              value={form.values.expiredMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("expiredMonth", form.errors.expiredMonth)}
            </small>
          </div>
          <div>
            <label htmlFor="expiredYear">Ano de vencimento</label>
            <input
              id="expiredYear"
              type="text"
              name="expiredYear"
              value={form.values.expiredYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("expiredYear", form.errors.expiredYear)}
            </small>
          </div>
        </div>
        <CartButton>Finalizar Pagamento</CartButton>
        <CartButton>Voltar para a edição de endereço</CartButton>
      </PaymentForm>
      <Conclusion>
        <h3>Pedido realizado - ORDER_ID</h3>
        <div>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </div>
        <CartButton>Concluir</CartButton>
      </Conclusion>
    </SideBar>
  );
};
export default Checkout;
