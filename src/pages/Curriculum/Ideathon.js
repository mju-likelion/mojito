import { BlueTitle, EventText, DeskTopBreakLine, MobileBreakLine } from '.';

const Ideathon = () => {
  return (
    <>
      <BlueTitle>아이디어톤</BlueTitle>
      <EventText>
        웹서비스로 실현하고 싶은 아이디어의 싹을 틔우는
        <MobileBreakLine />
        {' 아이디어톤은'}
        <DeskTopBreakLine />
        {' 막연하게 가지고 있던 문제인식과'}
        <MobileBreakLine /> 솔루션을 탄탄한 기획과
        <DeskTopBreakLine />
        디자인으로
        <MobileBreakLine /> {'전환하는 이벤트입니다. '}
        <span>
          멋사의 핵심가치인 협업을
          <MobileBreakLine />
          <DeskTopBreakLine />
          이루기 위한 초석
        </span>
        으로, 아이디어가 서비스로
        <MobileBreakLine /> 만들어지기 전<DeskTopBreakLine />
        여러 협업자들이 서비스에 대한
        <MobileBreakLine /> 싱크를 맞춰나가는 과정입니다.
      </EventText>
    </>
  );
};

export default Ideathon;
