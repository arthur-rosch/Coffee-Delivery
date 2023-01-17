import {
  ContainerCheckout,
  ContainerForm,
  ContainerDeliveryData,
  ContainerFormOfPayment,
  ContainerTextFormOfPayment,
  ContainerPayment,
  ButtonCreditCard,
  ButtonDebitCard,
  ButtonCash,
  ContainerTextDeliveryData,
  ContainerInputs,
  ZipCode,
  HouseStreet,
  HouseNumber,
  Complement,
  Neighborhood,
  City,
  State,
  InputsHouseNumberAndComplement,
  InputsCityAndState,
  ContainerCreditCard,
  ContainerDebitCard,
  ContainerCash,
} from './styles'
import {
  CreditCard,
  Bank,
  Money,
  CurrencyDollarSimple,
  MapPinLine,
} from 'phosphor-react'

export function FormCheckout() {
  return (
    <ContainerCheckout>
      <ContainerForm>
        <h2>Complete seu pedido</h2>
        <ContainerDeliveryData>
          <ContainerTextDeliveryData>
            <MapPinLine size={22} color="#DBAC2C" />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </ContainerTextDeliveryData>
          <ContainerInputs>
            <ZipCode type="text" placeholder="CEP"></ZipCode>
            <HouseStreet type="text" placeholder="Rua"></HouseStreet>

            <InputsHouseNumberAndComplement>
              <HouseNumber type="text" placeholder="Número"></HouseNumber>
              <Complement
                type="text"
                placeholder="Complemento Opcional"
              ></Complement>
            </InputsHouseNumberAndComplement>

            <InputsCityAndState>
              <Neighborhood type="text" placeholder="Bairro"></Neighborhood>
              <City type="text" placeholder="Cidade"></City>
              <State type="text" placeholder="UF"></State>
            </InputsCityAndState>
          </ContainerInputs>
        </ContainerDeliveryData>
        <ContainerFormOfPayment>
          <ContainerTextFormOfPayment>
            <CurrencyDollarSimple size={22} color="#8047F8" />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </ContainerTextFormOfPayment>
          <ContainerPayment>
            <ContainerCreditCard>
              <div>
                <CreditCard size={16} color="#8047F8" />
                <label htmlFor="">CARTÃO DE CREDITO</label>
              </div>

              <ButtonCreditCard type="radio" name="Payment"></ButtonCreditCard>
            </ContainerCreditCard>
            <ContainerDebitCard>
              <div>
                <Bank size={16} color="#8047F8" />
                <label htmlFor="">CARTÃO DE DEBITO</label>
              </div>

              <ButtonDebitCard type="radio" name="Payment"></ButtonDebitCard>
            </ContainerDebitCard>

            <ContainerCash>
              <div>
                <Money size={16} color="#8047F8" />
                <label htmlFor="">DINHEIRO</label>
              </div>

              <ButtonCash type="radio" name="Payment"></ButtonCash>
            </ContainerCash>
          </ContainerPayment>
        </ContainerFormOfPayment>
      </ContainerForm>
    </ContainerCheckout>
  )
}
