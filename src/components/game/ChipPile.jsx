import React from 'react'
import Chips from './Chips'

const ChipPile = ({ amount }) => {
  let leftover = amount
  let tenDollarChips, oneDollarChips, tenCentChips, fiveCentChips

  if (leftover >= 10) {
    tenDollarChips = Math.floor(leftover / 10)
    leftover = leftover % 10
  }

  if (leftover >= 1) {
    oneDollarChips = Math.floor(leftover / 1)
    leftover = leftover % 1
  }

  tenCentChips = Math.floor(leftover / 0.10)
  leftover = leftover % 0.10

  fiveCentChips = parseFloat(leftover.toFixed(2)) === 0.05 ? 1 : 0

  return (
    <div className="chip-pile">
      {tenDollarChips > 0 &&
        <Chips number={tenDollarChips} color={'purple'} />
      }
      {oneDollarChips > 0 &&
        <Chips number={oneDollarChips} color={'red'} />
      }
      {tenCentChips > 0 &&
        <Chips number={tenCentChips} color={'blue'} />
      }
      {fiveCentChips > 0 &&
        <Chips number={fiveCentChips} color={'white'} />
      }
    </div>
  )
}

export default ChipPile