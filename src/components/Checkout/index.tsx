import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import { RootReducer } from "../../store";
import {
  showDeliveryForm,
  showPaymentForm,
  open,
  showConclusion,
  close,
} from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";
import { CartButton } from "../Cart/styles";
import { Conclusion, DeliveryForm, PaymentForm } from "./styles";

const Checkout = () => {
  const dispatch = useDispatch();

  const { deliveryStep, paymentStep, conclusionStep, total } = useSelector(
    (state: RootReducer) => state.cart
  );

  const [purchase, { data }] = usePurchaseMutation();

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
      fullName: Yup.string().min(5).required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      zipCode: Yup.string().required("Campo obrigatório"),
      houseNumber: Yup.string().required("Campo obrigatório"),

      cardName: Yup.string().required("O campo é obrigatório!"),
      cardNumber: Yup.string().required("O campo é obrigatório!"),
      securityKey: Yup.string().required("O campo é obrigatório!"),
      expiredMonth: Yup.string().required("O campo é obrigatório!"),
      expiredYear: Yup.string().required("O campo é obrigatório!"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.houseComplement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.securityKey),
            expires: {
              month: Number(values.expiredMonth),
              year: Number(values.expiredYear),
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
      dispatch(showConclusion());
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return "";
  };

  const handlePaymentForm = () => {
    if (
      form.values.fullName &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.houseNumber
    ) {
      dispatch(showPaymentForm());
    } else {
      alert("Preencha os dados obrigatórios.");
    }
  };

  const handleBackToCart = () => {
    dispatch(open());
  };

  const handleClose = () => {
    dispatch(close());
  };

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        {deliveryStep && (
          <DeliveryForm>
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
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
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
            <CartButton type="submit" onClick={handlePaymentForm}>
              Continuar com o pagamento
            </CartButton>
            <CartButton type="button" onClick={handleBackToCart}>
              Voltar para o carrinho
            </CartButton>
          </DeliveryForm>
        )}
        {paymentStep && (
          <PaymentForm>
            <h3>Pagamento - Valor a pagar {formataPreco(total)}</h3>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage("cardName", form.errors.cardName)}</small>
            <div className="infos">
              <div>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                />
                <small>
                  {getErrorMessage("cardNumber", form.errors.cardNumber)}
                </small>
              </div>
              <div>
                <label htmlFor="securityKey">CVV</label>
                <InputMask
                  id="securityKey"
                  type="text"
                  name="securityKey"
                  value={form.values.securityKey}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                />
                <small>
                  {getErrorMessage("securityKey", form.errors.securityKey)}
                </small>
              </div>
            </div>
            <div className="expiredInfos">
              <div>
                <label htmlFor="expiredMonth">Mês de vencimento</label>
                <InputMask
                  id="expiredMonth"
                  type="text"
                  name="expiredMonth"
                  value={form.values.expiredMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
                <small>
                  {getErrorMessage("expiredMonth", form.errors.expiredMonth)}
                </small>
              </div>
              <div>
                <label htmlFor="expiredYear">Ano de vencimento</label>
                <InputMask
                  id="expiredYear"
                  type="text"
                  name="expiredYear"
                  value={form.values.expiredYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
                <small>
                  {getErrorMessage("expiredYear", form.errors.expiredYear)}
                </small>
              </div>
            </div>
            <CartButton type="submit">Finalizar Pagamento</CartButton>
            <CartButton onClick={() => dispatch(showDeliveryForm())}>
              Voltar para a edição de endereço
            </CartButton>
          </PaymentForm>
        )}
      </form>
      {conclusionStep && (
        <Conclusion>
          <h3>Pedido realizado - {data?.orderId}</h3>
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
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
          <CartButton type="submit" onClick={handleClose}>
            Concluir
          </CartButton>
        </Conclusion>
      )}
    </>
  );
};

export default Checkout;
