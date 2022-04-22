import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Button from 'components/Button'

import * as S from './styles'

import { CurrentModal, UserDisability } from '../../types/types'

import { api } from '../../service/api'
import { toast } from 'react-toastify'
import Tag from 'components/Tag'

type DisabilitiesProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

type DisabilitiesyData = {
  isSelect?: boolean
} & UserDisability

export const Disabilities = ({ setCurrentModal }: DisabilitiesProps) => {
  const [disabilities, setDisabilities] = useState<DisabilitiesyData[]>([])

  useEffect(() => {
    api
      .get<Array<DisabilitiesyData>>('/disabilities/list')
      .then((response) => {
        setDisabilities(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleUserDisabilities = async () => {
    const disabilityIds = disabilities.reduce((acc, disability) => {
      return disability.isSelect === true ? [...acc, disability.id] : acc
    }, [] as Array<string>)
    try {
      await api.post('/users/disabilities', { disabilityIds })
      toast.success('Informações cadastradas com sucesso')
      setCurrentModal('idle')
    } catch (error) {
      toast.error('error')
      setCurrentModal('idle')
    }
  }

  const handleDisabilitySelected = (selectedDisability: DisabilitiesyData) => {
    const UpdatedDisabilities = disabilities.map((disability) =>
      disability.id === selectedDisability.id
        ? { ...disability, isSelect: !selectedDisability.isSelect }
        : disability
    )
    setDisabilities(UpdatedDisabilities)
  }

  return (
    <S.Wrapper>
      <S.H1>
        Deseja informar se possui algum tipo de deficiência? Se sim, qual
        destas?
      </S.H1>
      <S.DisabilitiesContainer>
        {disabilities.map((disability) => (
          <S.DisabilityButton
            key={disability.id}
            onClick={() => handleDisabilitySelected(disability)}
            isSelect={disability.isSelect}
          >
            <Tag borderColor="secondary">{disability.name}</Tag>
          </S.DisabilityButton>
        ))}
      </S.DisabilitiesContainer>
      <S.FinalizarButton>
        <Button
          bgColor="primary"
          fullWidth={true}
          onClick={handleUserDisabilities}
        >
          CONFIRMAR
        </Button>
        <S.SkipStep onClick={() => setCurrentModal('idle')}>PULAR</S.SkipStep>
      </S.FinalizarButton>
    </S.Wrapper>
  )
}
