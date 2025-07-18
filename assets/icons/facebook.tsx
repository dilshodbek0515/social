import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop
} from 'react-native-svg'

const Facebook = () => (
  <Svg width='19' height='18' viewBox='0 0 19 18' fill='none'>
    <G clip-path='url(#clip0_468_1484)'>
      <Path
        d='M8.265 17.91C3.99 17.145 0.75 13.455 0.75 9C0.75 4.05 4.8 0 9.75 0C14.7 0 18.75 4.05 18.75 9C18.75 13.455 15.51 17.145 11.235 17.91L10.74 17.505H8.76L8.265 17.91Z'
        fill='#0062E0'
      />
      <Path
        d='M13.2601 11.5198L13.6651 8.99977H11.2801V7.24477C11.2801 6.52477 11.5501 5.98477 12.6301 5.98477H13.8001V3.68977C13.1701 3.59977 12.4501 3.50977 11.8201 3.50977C9.75006 3.50977 8.31006 4.76977 8.31006 7.01977V8.99977H6.06006V11.5198H8.31006V17.8648C8.80506 17.9548 9.30006 17.9998 9.79506 17.9998C10.2901 17.9998 10.7851 17.9548 11.2801 17.8648V11.5198H13.2601Z'
        fill='white'
      />
    </G>
    <Defs>
      <LinearGradient
        id='paint0_linear_468_1484'
        x1='9.75045'
        y1='17.374'
        x2='9.75045'
        y2='-0.0033155'
        gradientUnits='userSpaceOnUse'
      >
        <Stop stop-color='#0062E0' />
        <Stop offset='1' stop-color='#19AFFF' />
      </LinearGradient>
      <ClipPath id='clip0_468_1484'>
        <Rect width='18' height='18' fill='white' transform='translate(0.75)' />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Facebook
