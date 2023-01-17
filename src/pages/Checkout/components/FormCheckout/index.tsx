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
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { MouseEventHandler, useContext } from 'react'
import { Address, CoffeeContext } from '../../../../contexts/CoffeesContexts'

const newOrderFormValidationSchema = zod.object({
  ZipCode: zod.string().min(9).max(9),
  Street: zod.string().min(5).max(30),
  Number: zod.string().min(1).max(6),
  Complement: zod.string().max(40).optional(),
  Neighborhood: zod.string().min(1).max(30),
  City: zod.string().min(1).max(20),
  State: zod.string().min(2).max(2),
  Payment: zod.string().min(1),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function FormCheckout() {
  const { createNewAddress } = useContext(CoffeeContext)
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      ZipCode: '',
      Street: '',
      Number: '',
      Complement: '',
      Neighborhood: '',
      City: '',
      State: '',
      Payment: '',
    },
  })

  const { getValues, register } = useForm()

  function handleNewAddress(e: MouseEventHandler<HTMLInputElement>) {
    const newAddress: Address = {
      ZipCode: getValues('ZipCode'),
      Street: getValues('Street'),
      Number: getValues('Number'),
      Complement: getValues('Complement'),
      Neighborhood: getValues('Neighborhood'),
      City: getValues('City'),
      State: getValues('State'),
      Payment: getValues('Payment'),
    }
    console.log(newAddress)
    createNewAddress(newAddress)
  }

  return (
    <ContainerCheckout>
      <ContainerForm>
        <FormProvider {...newOrderForm}>
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
              <ZipCode
                type="text"
                placeholder="CEP"
                {...register('ZipCode')}
              ></ZipCode>
              <HouseStreet
                type="text"
                placeholder="Rua"
                {...register('Street')}
              ></HouseStreet>

              <InputsHouseNumberAndComplement>
                <HouseNumber
                  type="text"
                  placeholder="Número"
                  {...register('Number')}
                ></HouseNumber>
                <Complement
                  type="text"
                  placeholder="Complemento Opcional"
                  {...register('Complement')}
                ></Complement>
              </InputsHouseNumberAndComplement>

              <InputsCityAndState>
                <Neighborhood
                  type="text"
                  placeholder="Bairro"
                  {...register('Neighborhood')}
                ></Neighborhood>
                <City
                  type="text"
                  placeholder="Cidade"
                  {...register('City')}
                ></City>
                <State
                  type="text"
                  placeholder="UF"
                  {...register('State')}
                ></State>
              </InputsCityAndState>
            </ContainerInputs>
          </ContainerDeliveryData>
          <ContainerFormOfPayment>
            <ContainerTextFormOfPayment>
              <CurrencyDollarSimple size={22} color="#8047F8" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </ContainerTextFormOfPayment>
            <ContainerPayment>
              <ContainerCreditCard>
                <div>
                  <CreditCard size={16} color="#8047F8" />
                  <label htmlFor="">CARTÃO DE CREDITO</label>
                </div>

                <ButtonCreditCard
                  type="radio"
                  value="CARTÃO DE CREDITO"
                  onClick={handleNewAddress}
                  {...register('Payment')}
                ></ButtonCreditCard>
              </ContainerCreditCard>
              <ContainerDebitCard>
                <div>
                  <Bank size={16} color="#8047F8" />
                  <label htmlFor="">CARTÃO DE DEBITO</label>
                </div>

                <ButtonDebitCard
                  type="radio"
                  value="CARTÃO DE DEBITO"
                  onClick={handleNewAddress}
                  {...register('Payment')}
                ></ButtonDebitCard>
              </ContainerDebitCard>

              <ContainerCash>
                <div>
                  <Money size={16} color="#8047F8" />
                  <label htmlFor="">DINHEIRO</label>
                </div>

                <ButtonCash
                  type="radio"
                  value="DINHEIRO"
                  onClick={handleNewAddress}
                  {...register('Payment')}
                ></ButtonCash>
              </ContainerCash>
            </ContainerPayment>
          </ContainerFormOfPayment>
        </FormProvider>
      </ContainerForm>
    </ContainerCheckout>
  )
}
