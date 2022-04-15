import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { withSSRAuth } from 'utils/withSSRAuth'
import * as S from './EventDetails'

export default function EventsDetails() {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.DateHeader>Saturday, April 30, 2022</S.DateHeader>
          <S.EventTitle>
            [Online] Find a Friend in New Yourk - Networking event
          </S.EventTitle>
          <S.HostHeader>
            <S.FakePersonIcon />
            <S.HostedBy>
              Hosted By <S.HostName>Nancy</S.HostName>
            </S.HostedBy>
          </S.HostHeader>
        </S.HeaderContent>
      </S.HeaderContainer>

      <S.MainInfoContainer>
        <S.EventInfoContainer>
          <S.EventInfo>
            <Image
              width={620}
              height={380}
              src="/eventFake.webp"
              alt="Default Img"
            />
            <S.Details>
              <S.H2>Details</S.H2>
              <S.PInfo>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                deserunt nobis suscipit eaque?
              </S.PInfo>
              <S.PInfo>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                deserunt nobis suscipit eaque?
              </S.PInfo>
            </S.Details>
          </S.EventInfo>
          <S.SideInfo>
            <S.ScheduleContainer>
              <S.ScheduleContent>
                <S.IconContainer />
                <S.ScheduleInfo>
                  Saturday, April 30, 2022 6:00 PM to 7:00 PM BRT Every week on
                  Saturday
                </S.ScheduleInfo>
              </S.ScheduleContent>
              <S.ScheduleContent>
                <S.IconContainer />
                <S.ScheduleInfo>
                  Online event Link visible for attendees
                </S.ScheduleInfo>
              </S.ScheduleContent>
            </S.ScheduleContainer>
          </S.SideInfo>
        </S.EventInfoContainer>
        <S.FloatingInfo>Teste</S.FloatingInfo>
      </S.MainInfoContainer>
      <S.FooterContainer>
        <S.FooterContent>
          <S.SocialMedia>
            <p>Follow us</p>
            <S.SocialIcons>
              <S.IconContainer />
              <S.IconContainer />
              <S.IconContainer />
            </S.SocialIcons>
          </S.SocialMedia>
          <S.MobileLinks>
            <S.IconContainer />
            <S.IconContainer />
          </S.MobileLinks>
        </S.FooterContent>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  //Make the Events info request on server side
  return {
    props: {}
  }
})
