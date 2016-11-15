var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
require('../utils/gitHubHelpers');
var ConfirmBattleContainer = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false,
      playersInfo: []
    }
  },


render: function(){
  return(
    <ConfirmBattle
     isLoading={this.state.isLoading}
     playerInfo={this.state.playersInfo}
      />
  )
 }
})

module.exports = ConfirmBattleContainer;
