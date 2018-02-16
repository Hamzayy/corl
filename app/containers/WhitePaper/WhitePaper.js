import React from 'react';
import Banner from '../../components/whitepaper/Banner/Banner';
import ModelInvestor from '../HomePage/ModelInvestor';

class WhitePaper extends React.Component {
  state = { investorModel: false }
  render() {
    return (
      <div className="main-content">
        <Banner
          openInvestorModel={(value) => {
            this.setState({ investorModel: value })
          }}
        />
        {
          this.state.investorModel ?
            <ModelInvestor
              closeInvestorModel={(value) => {
                this.setState({ investorModel: value })
              }}
            />
            :
            null
        }
      </div>
    )
  }
}

export default WhitePaper;
