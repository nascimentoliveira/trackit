import styled from 'styled-components';
import dayjs from 'dayjs';
import UserContext from '../../UserContext';
import { useContext } from 'react';
//import 'dayjs/locale/pt-br'
//dayjs.locale('pt-br')

export default function NavToday() {

  const { progress } = useContext(UserContext);

  const progressValue = ((progress.done.length > 0) ?
    Math.round((progress.done.length / (progress.done.length + progress.notDone.length)) * 100) : 0);

  const dictWeekDays = {
    'Monday': 'Segunda',
    'Tuesday': 'Terça',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sábado',
    'Sunday': 'Domingo'
  }

  return (
    <NavTodayComponent data-identifier='today-infos'>
      <Today>{dictWeekDays[dayjs().format('dddd')]}, {dayjs().format('DD/MM')}</Today>
      <Status some={(progressValue > 0)}>
        {(progressValue === 0) ?
          'Nenhum hábito concluído ainda'
          :
          `${progressValue}% dos hábitos concluído`
        }
      </Status>
    </NavTodayComponent>
  );
}

const NavTodayComponent = styled.nav`
  max-width: 375px;
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 28px 18px;
  box-sizing: border-box;
`;

const Today = styled.span`
  font-size: 23px;
  line-height: 29px;
  color: #126BA5;
`;

const Status = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.some ? '#8FC549' : '#BABABA'};;
`;