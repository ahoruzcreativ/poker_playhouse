import React from 'react'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const styleSheet = createStyleSheet('ActionButtons', theme => ({
  container: {
    display: 'flex'
  },
  button: {
    flex: 1,
    color: '#fff',
    margin: '4px',
    verticalAlign: 'top',
    height: '80px',
    fontSize: '1.5em',
  }
}))

const ActionButtons = ({
  seat,
  table,
  raiseAmount,
  totalCallAmount,
  handleFoldClick,
  handleCheckClick,
  handleCallClick,
  handleRaiseClick,
  classes
}) => (
  <div className={classes.container}>
    <Button
      raised
      color="accent"
      className={classes.button}
      onClick={handleFoldClick}>
      Fold
    </Button>

    {(!table.callAmount || seat.bet === table.callAmount) &&
      <Button
        raised
        color="accent"
        className={classes.button}
        onClick={handleCheckClick}>
        Check
      </Button>
    }

    {(table.callAmount > 0 && seat.bet !== table.callAmount) &&
      <Button
        raised
        color="accent"
        className={classes.button}
        onClick={handleCallClick}>
        Call ${(totalCallAmount).toFixed(2)}
      </Button>  
    }

    {seat.stack > table.callAmount &&
      <Button
        raised
        color="accent"
        className={classes.button}
        onClick={handleRaiseClick}>
        Raise to ${parseFloat(raiseAmount).toFixed(2)}
      </Button>
    }
  </div>
)

export default withStyles(styleSheet)(ActionButtons)