import styled from "styled-components";
import { BPLarge, BPMedium, BPSmall } from "../BreakPoint";
import Gap from "../Gap";
import AnimatedButton from "../AnimatedButton";

const LimitSaleWrapper = styled.div`
  width: 100vw;
  margin: 32px calc(50% - 50vw);

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  background-image: url(https://33esog1b5uudrsor3485evx1-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/o1-1.jpg);
  background-size: cover;

  background-color: rgb(254, 242, 231);
  max-width: calc(100vw - 15px);
  margin-left: calc(50% - 50vw + 7.5px);
`;

const LimitSaleContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 15px;

  @media only screen and (min-width: ${BPSmall}) {
    padding: 0 30px;
  }
`;

const LimitSaleTitle = styled.h2`
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 42px;
`;

const LimitSale = () => {
  return (
    <LimitSaleWrapper>
      <LimitSaleContainer>
        <Gap height="120px" />
        <LimitSaleTitle>Limited Time Only</LimitSaleTitle>
        <p>
          Elegance isn’t solely defined by what you wear. It’s how you
          <br />
          carry yourself, how you speak, what you read. I didn’t consider
          <br />
          myself a fashion designer at all at the time of punk.
        </p>
        <Gap height="20px" />
        <AnimatedButton
          text="Sale Products"
          url="/products/sales"
          alignLeft={true}
        />
        <Gap height="120px" />
      </LimitSaleContainer>
    </LimitSaleWrapper>
  );
};

export default LimitSale;
