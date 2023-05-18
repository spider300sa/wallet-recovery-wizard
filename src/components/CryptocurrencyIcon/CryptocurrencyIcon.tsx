import clsx from 'clsx';
export interface CryptocurrencyIconProps {
    Name: 'ada' | 'atom' | 'avax' | 'bch' | 'bsv' | 'btc' | 'btg' | 'dash' | 'doge' | 'dot' | 'eos' | 'eth' | 'ltc' | 'near' | 'polygon' | 'sol' | 'trx' | 'xec' | 'xlm' | 'xrp' | 'zec';
    Size: 'small' | 'medium' | 'large';
  }

  export function CryptocurrencyIcon({Name, Size, ...hostProps}: CryptocurrencyIconProps & JSX.IntrinsicElements['svg']) {
    switch (Name) {
      case 'ada':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><defs><filter x="-7.5%" y="-6%" width="115.5%" height="117.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1"/></filter><path d="M15.725 6.06c.479-.247 1.064.324.81.795-.149.384-.71.486-.996.193-.303-.28-.204-.836.186-.989zm-5.155.546c.291-.118.66.144.63.457.03.338-.39.588-.687.427-.393-.15-.348-.778.057-.884zm10.558.893c-.455-.054-.527-.758-.09-.9.34-.162.652.143.702.46-.072.27-.302.518-.612.44zm-9.385 1.265c.487-.303 1.181.148 1.106.705-.025.561-.783.887-1.211.507-.414-.298-.351-.982.105-1.212zm7.43.322c.217-.55 1.097-.568 1.344-.032.245.417-.056.934-.491 1.076-.577.106-1.124-.508-.853-1.044zm-4.069 1.013c-.005-.474.433-.826.89-.859.304.06.634.187.764.488.243.416.027.987-.41 1.178-.2.11-.438.069-.656.056-.333-.16-.614-.477-.588-.863zm-7.666.69c.445-.27 1.045.22.876.696-.092.411-.654.578-.975.316-.343-.246-.289-.837.1-1.013zm16.462-.002c.377-.288 1 .043.954.511.026.427-.513.75-.887.53-.412-.183-.455-.807-.067-1.04zm-6.64.851c.622-.22 1.362.043 1.716.59.468.667.22 1.683-.507 2.066-.752.453-1.851.07-2.13-.758-.315-.74.145-1.666.92-1.898zm-3.653.073c.69-.32 1.619-.052 1.952.642.392.676.089 1.617-.612 1.966-.702.393-1.693.095-2.032-.63-.381-.702-.043-1.655.692-1.978zM9.95 12.94c.053-.437.472-.722.895-.752a.98.98 0 01.87.857c-.03.45-.383.888-.867.886-.533.045-1-.477-.898-.991zm10.802-.656c.547-.313 1.306.142 1.282.76.037.655-.803 1.116-1.347.732-.566-.32-.522-1.22.065-1.492zm-8.63 2.307c.638-.173 1.37.123 1.683.701.343.582.203 1.39-.33 1.818-.685.626-1.946.374-2.31-.48-.419-.783.09-1.833.956-2.04zm6.927-.003c.621-.175 1.351.06 1.685.617.442.637.231 1.588-.426 1.998-.69.477-1.756.227-2.136-.519-.46-.771.003-1.861.877-2.096zm-11.04.726c.552-.205 1.164.394.94.933-.136.49-.839.672-1.202.31-.425-.34-.268-1.095.262-1.243zm14.969.782a.836.836 0 01.788-.874c.378.06.746.36.716.765.035.535-.62.898-1.084.647-.217-.109-.328-.328-.42-.538zM5.294 15.58c.332-.143.743.14.667.503-.018.411-.635.57-.861.226-.2-.239-.08-.606.194-.73zm20.949-.009c.234-.163.61-.046.702.223.157.294-.131.696-.467.647-.472.042-.624-.665-.235-.87zm-12.317 1.973c.874-.223 1.814.494 1.82 1.38.056.895-.87 1.688-1.764 1.482-.692-.11-1.235-.766-1.212-1.453-.002-.658.502-1.27 1.156-1.409zm3.462-.001c.887-.244 1.855.486 1.841 1.392.047.878-.85 1.645-1.726 1.47-.825-.104-1.433-.995-1.203-1.783.116-.524.562-.95 1.088-1.08zm-6.676.545c.614-.103 1.19.57.941 1.144-.182.612-1.086.777-1.486.278-.468-.48-.118-1.356.545-1.422zm10.154.027c.548-.226 1.22.24 1.178.825.022.643-.808 1.087-1.343.711-.607-.337-.496-1.33.165-1.536zm2.838 2.8c-.214-.393.175-.914.62-.841.22-.004.375.167.516.311.029.233.078.511-.119.69-.267.333-.872.238-1.017-.16zm-16.268-.732c.415-.271 1.012.134.918.61-.05.423-.59.664-.945.424-.382-.217-.368-.836.027-1.034zm8.193.883c.543-.235 1.235.23 1.183.818.04.65-.815 1.1-1.346.71-.59-.335-.491-1.321.163-1.528zm-3.794.871c.462-.239 1.082.174 1.04.684.014.418-.4.774-.82.712-.347-.007-.573-.314-.685-.605.006-.317.139-.67.465-.79zm7.686.008c.476-.29 1.152.126 1.107.67.012.57-.752.934-1.195.56-.428-.293-.376-.997.088-1.23zm1.337 3.25c-.212-.314.037-.693.38-.765.277.055.57.26.511.574-.04.427-.674.557-.891.192zm-10.611-.273c.084-.25.288-.497.587-.432.435.03.564.676.183.875-.342.227-.74-.084-.77-.443zm5.12.287c.083-.37.568-.549.888-.353.212.09.274.322.328.52a8.822 8.822 0 00-.08.31c-.131.152-.3.305-.518.3-.405.047-.771-.404-.619-.777z" id="b"/></defs><g fill="none"><circle cx="16" cy="16" r="16" fill="#0D1E30"/><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#FFF" xlinkHref="#b"/></g></svg>;
      case 'atom':
          return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
              'tw-w-4 tw-h-4': Size === 'small',
              'tw-w-6 tw-h-6': Size === 'medium',
              'tw-w-8 tw-h-8': Size === 'large',
            })} {...hostProps}><g fill="none"><circle cx="16" cy="16" r="16" fill="#2E3148"/><g transform="translate(6 5)" fill="#FFF"><path d="M10.02.53c-1.295 0-2.345 4.697-2.345 10.49s1.05 10.49 2.345 10.49c1.294 0 2.344-4.697 2.344-10.49S11.314.53 10.02.53zm.162 20.387c-.148.198-.297.05-.297.05-.596-.692-.894-1.975-.894-1.975-1.043-3.357-.795-10.564-.795-10.564.49-5.721 1.382-7.073 1.685-7.373a.185.185 0 01.238-.019c.44.313.81 1.617.81 1.617 1.09 4.048.991 7.848.991 7.848.099 3.308-.546 7.01-.546 7.01-.497 2.814-1.192 3.406-1.192 3.406z"/><path d="M19.118 5.8c-.645-1.124-5.24.303-10.267 3.186-5.027 2.883-8.573 6.13-7.93 7.254.645 1.124 5.241-.303 10.268-3.186 5.027-2.883 8.574-6.131 7.93-7.254zM1.515 16.085c-.246-.03-.19-.234-.19-.234.302-.86 1.266-1.758 1.266-1.758 2.393-2.575 8.769-5.946 8.769-5.946 5.206-2.422 6.823-2.32 7.233-2.208a.185.185 0 01.135.198c-.05.537-1 1.507-1 1.507-2.966 2.961-6.312 4.768-6.312 4.768-2.82 1.732-6.353 3.013-6.353 3.013-2.688.968-3.548.66-3.548.66z"/><path d="M19.095 16.277c.65-1.12-2.887-4.383-7.898-7.288C6.187 6.085 1.593 4.641.944 5.763c-.65 1.123 2.888 4.383 7.9 7.288 5.013 2.904 9.602 4.348 10.251 3.226zM1.375 6.196c-.097-.228.106-.283.106-.283.897-.17 2.157.217 2.157.217 3.427.78 9.538 4.608 9.538 4.608 4.705 3.292 5.427 4.743 5.535 5.154a.185.185 0 01-.103.215c-.49.225-1.805-.11-1.805-.11-4.05-1.086-7.289-3.075-7.289-3.075-2.91-1.57-5.788-3.985-5.788-3.985-2.187-1.842-2.35-2.74-2.35-2.74l-.002-.001z"/><circle cx="9.995" cy="10.995" r="1.234"/><circle cx="15.055" cy="6.256" r="1"/><circle cx="3.306" cy="8.774" r="1"/><circle cx="8.539" cy="17.856" r="1"/></g></g></svg>;
case 'avax':
    return <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" style={{}} xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}>
<style type="text/css">{`
	.st0{fill:#E84142;}
	.st1{fill:#FFFFFF;}
`}</style>
<circle cx="16" cy="16" r="16" className="st0"/>
<path d="M21.6,16.4c0.2-0.6,0.8-0.8,1.4-0.7c0.3,0.1,0.5,0.3,0.7,0.7l3.4,6.1c0.6,1,0.1,1.7-1,1.7h-7
	c-1.1,0-1.6-0.8-1-1.7L21.6,16.4z M14.9,4.7c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1l0.8,1.4l1.8,3.2c0.4,0.9,0.4,2,0,2.9l-6.1,10.5
	c-0.6,0.9-1.5,1.4-2.5,1.5h-5c-1.1,0-1.6-0.8-1-1.7L14.9,4.7z" className="st1"/>
</svg>;
case 'bch':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" fill="#8dc351" r="16"/><path d="M21.207 10.534c-.776-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.786 2.74c-.45.128-.908.27-1.363.41l-.79-2.758-1.711.49.805 2.813c-.368.114-.73.226-1.085.328l-.003-.01-2.362.677.525 1.83s1.258-.388 1.243-.358c.694-.199 1.035.139 1.2.468l.92 3.204c.047-.013.11-.029.184-.04l-.181.052 1.287 4.49c.032.227.004.612-.48.752.027.013-1.246.356-1.246.356l.247 2.143 2.228-.64c.415-.117.825-.227 1.226-.34l.817 2.845 1.71-.49-.807-2.815a65.74 65.74 0 001.372-.38l.802 2.803 1.713-.491-.814-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.724-2.912-3.471-2.836.848-.79 1.213-1.858.642-3.3zm-.65 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.081-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.514 2.857l-.98-3.419c.966-.277 3.915-1.455 4.494.563z" fill="#fff" fillRule="nonzero"/></g></svg>;
case 'bsv':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle cx="16" cy="16" r="16" fill="#EAB304"/><path d="M22.15 14.57l.07-.14c0-.07 0-.14.14-.09a.56.56 0 000-.19.4.4 0 000-.28 1.71 1.71 0 01-.07-1.09.3.3 0 000-.14l.07-.07a.33.33 0 01.07.09.3.3 0 010 .14v.07c0 .07.12-.07.17-.12a1 1 0 01.2-.12 1.36 1.36 0 00-.07-.54 1.67 1.67 0 01.07-1.14c0 .07.09.12.09.19.017.26.127.505.31.69.203.233.356.505.45.8 0 0 0 .09.07.09.288.083.55.237.76.45.242.218.472.448.69.69a.49.49 0 01.09.14h.07a6.23 6.23 0 000-.66c0-.19.09-.38.28-.35h.09a.39.39 0 01.3-.36.4.4 0 010 .4c.14.17.17.26 0 .45s-.09.21 0 .4a.86.86 0 01.12-.31c.05-.1.07-.26.19-.31a.18.18 0 01.12 0 .9.9 0 00.35 0 .35.35 0 01.35.21l-.33.16c.07.14 0 .19-.14.28a1.53 1.53 0 00-.19.21 3.42 3.42 0 00.38-.09.37.37 0 01.43.21.35.35 0 00.12.14.5.5 0 01.17.33.18.18 0 010 .09l-.19-.14a.13.13 0 00-.18 0 .18.18 0 01-.25 0 .44.44 0 00-.45 0 3.22 3.22 0 01-.33.19.85.85 0 01.63.43c.07.14.17.28.24.43a.25.25 0 01-.12.33h-.05v-.05c0-.12-.07-.14-.19-.12a.26.26 0 01-.33-.17 1.1 1.1 0 00-.55-.52l-.21-.09a.85.85 0 01-.09.26.63.63 0 01-.12.14c-.14.12-.14.14 0 .31.14.17.07.09.12.17a.49.49 0 01-.4-.17 1.77 1.77 0 01-.3-.47.39.39 0 01.14-.45.85.85 0 00.17-.24l-.71-.19a1.6 1.6 0 010 .33c.024.403.024.807 0 1.21a7.7 7.7 0 01-.28 1.77 6 6 0 01-.5 1.28 9.54 9.54 0 01-.61 1.06 6.8 6.8 0 01-.64.8 5.9 5.9 0 01-.78.76c-.31.26-.64.47-1 .69a6.21 6.21 0 01-1.56.71 9.81 9.81 0 01-1.13.26 5.94 5.94 0 01-.64.09.43.43 0 00-.28.28 1.19 1.19 0 01-.52.78c-.12.09-.26.17-.4.26l.07-.21a.27.27 0 00-.07-.26c-.07-.07-.17 0-.26 0s-.17.12-.19.26a.77.77 0 01-.45.59h-.12a1.45 1.45 0 00.07-.26c0-.07-.07-.14-.12-.21-.05-.07-.09 0-.14 0l-.43.21-.14.07.38.17a1 1 0 01.47.47.32.32 0 010 .38.11.11 0 000 .12.93.93 0 01-.09.71c0 .07-.12.14-.17.21l-.07-.48a.09.09 0 00-.09-.09.74.74 0 01-.69-.4l-.07-.09a.87.87 0 01-.52.35 1.07 1.07 0 00-.59.69 2 2 0 01-.17.5.45.45 0 01-.57.26v.38a.42.42 0 01-.3-.52.4.4 0 000-.17.62.62 0 01.21-.8 2.07 2.07 0 00.5-.52.12.12 0 000-.07l-.71-.09a.67.67 0 00-.52.07l-.14.18c-.21.24-.31.26-.59.12a1 1 0 00-.12.64.75.75 0 01-.21-.38.79.79 0 010-.24v-.14a.33.33 0 010-.21.83.83 0 01.43-.43 1.49 1.49 0 01.71-.24c.19-.012.38-.012.57 0h.14a.8.8 0 00-.47-.45l-.54-.21a.23.23 0 01-.26-.19.09.09 0 00-.09-.09.85.85 0 00-.47.14c.07-.21.17-.43.4-.47a1.34 1.34 0 01.31 0h.09c.14-.21.35-.17.54-.07.277.132.507.344.66.61a.54.54 0 00.35.28 1.36 1.36 0 00-.07-.54.38.38 0 00-.28-.35c-.24-.07-.31-.24-.19-.5a.6.6 0 00-.59-.12c.07-.19.35-.26.54-.24a1 1 0 00.57.14.43.43 0 01.31.24l.14.28c.12.21.21.45.31.66.14-.4.31-.83.47-1.28l-.24-.09-.69-.28a7.8 7.8 0 01-1.49-.85.85.85 0 00-.26-.09c-.07 0-.17.09-.12.17.05.08.12.09.17.17.05.08 0 .07.09.12h-.12a.8.8 0 01-.76-.5 2.56 2.56 0 01-.26-.95.09.09 0 000-.07l-.64-.71a.52.52 0 000 .38l.07.14v.17h-.19a1.46 1.46 0 01-.26-.4c-.09-.35-.14-.71-.21-1.06a3.59 3.59 0 00-.09-.52 5.32 5.32 0 00-.19-.59v.55c0 .05-.12 0-.14-.09a1.43 1.43 0 01-.19-.61 4.63 4.63 0 01.21-1.49 4.41 4.41 0 01.17-.52.71.71 0 01-.09.16l-.09.09v-.12a1.23 1.23 0 01.17-.64c.17-.38.38-.76.57-1.13a3.61 3.61 0 01.26-.38l-.17.18-.12.07v-.07a3.46 3.46 0 01.21-.31 3.72 3.72 0 01.78-.71.32.32 0 01.21 0l1 .21.35.09a1.44 1.44 0 00-.24.33.43.43 0 000 .39.15.15 0 010 .17 2.66 2.66 0 00-.57.69v.09s.33.33.5.52c.01.03.01.06 0 .09a.84.84 0 000 .85.34.34 0 00.43.24.83.83 0 00.17.54c.07.07.17.12.24.19a.24.24 0 01.09.12 1 1 0 00.8.69c.288.04.58-.02.83-.17.09 0 .12-.07.14 0 .056.349.168.686.33 1 .207.366.463.702.76 1 .267.255.594.44.95.54.44.099.9-.025 1.23-.33a3 3 0 00.52-.71l.43-.69a2.3 2.3 0 01.71-.64.39.39 0 01.33-.07l-.07.14a.54.54 0 000 .57c.07.09.12.09.17 0 .05-.09.14-.26.33-.24.19.02.19-.12.21-.24a3 3 0 01.45-1.47 1 1 0 01.17-.14v.38c.019.106.05.21.09.31l.06-.13a.21.21 0 01.19-.12.2.2 0 00.12-.07.61.61 0 00.12-.57 1.43 1.43 0 010-.45 1.1 1.1 0 01.14-.54.49.49 0 01.09-.14h.07v.33a.18.18 0 000 .09h.09l.18-.12a.72.72 0 00.09-.4.7.7 0 010-.24v-.82c0-.11 0-.12.07-.19l.11-.06v.44a.09.09 0 01.08-.05zM9.86 10.01l.59-.59a.41.41 0 01.12-.09c.07-.07 0-.14 0-.21 0-.07-.09 0-.17 0h-.09V9a.59.59 0 01.33-.37 1.18 1.18 0 01.8 0 .16.16 0 00.14 0l.57-.31c.09 0 .07-.09 0-.14-.07-.05-.17-.12-.26 0a.18.18 0 01-.09 0c0-.17.17-.31.33-.38.27-.083.56-.083.83 0H13c.07 0 .28.09.45 0l.35-.12c.09 0 .09-.07 0-.12-.09-.05-.12-.14-.21-.07s0 0-.09 0a.11.11 0 010-.15.83.83 0 01.61-.16 1 1 0 01.54.21h.07a.28.28 0 00.28.09.37.37 0 01.38 0h.07v-.09a.28.28 0 00-.28-.21h-.07a.86.86 0 01.85-.12c.206.084.386.222.52.4a.57.57 0 00.17.07 1 1 0 01.4.07c.12.07.07 0 .09.09a.27.27 0 00-.13-.36h-.2v-.15a.86.86 0 01.33 0c.316.037.6.208.78.47.07.12.128.247.17.38a.49.49 0 01.45.19h.07a.52.52 0 00.12-.04.38.38 0 00-.26-.35h-.07c.09 0 .17-.07.26 0 .15.014.295.055.43.12.356.145.622.449.72.82.17.09.28.19.4.26h.14v-.21a.47.47 0 00-.26-.33l-.09-.07a.64.64 0 01.61.19c.185.156.323.36.4.59a.24.24 0 00.14.17c.076.057.146.12.21.19.09-.26-.12-.4-.19-.59a.54.54 0 01.4.19c.14.146.266.303.38.47.072.122.152.239.24.35.072.134.119.28.14.43a2.81 2.81 0 01-.14 1 6 6 0 000 .66c.01.03.01.06 0 .09a.86.86 0 00-.31.59 2.86 2.86 0 000 .9v.07a1 1 0 00-.45.83v.52a.82.82 0 00-.62.56c-.07.14-.09.31-.17.45-.08.14-.09.09-.14.14v-.19a4.15 4.15 0 00.07-.95 3.37 3.37 0 00-.26-1.37v-.17a1 1 0 00.28-.59 6.65 6.65 0 000-1 .93.93 0 00-.24-.64.58.58 0 00-.64-.13.77.77 0 00-.47.71v.35a3.44 3.44 0 00-1.25-.8 4.72 4.72 0 00-.83-.21h-.61a3.72 3.72 0 00-1.16.19c-.21.07-.4.17-.61.24a.15.15 0 01-.14 0 5.52 5.52 0 00-1.44-.61 3.65 3.65 0 00-.73-.12c-.5-.1-1-.17-1.42-.3a3.46 3.46 0 01-1.06-.45.36.36 0 00-.12-.17zm9.45 4.7c0 .17-.31.21-.64.12v.35a.48.48 0 010 .12h-.14a2.83 2.83 0 01-.28-.26.42.42 0 00-.24.28c-.07.19-.17.21-.31 0a1.06 1.06 0 00-.17-.14 2.51 2.51 0 01-.21.26.2.2 0 01-.14.07.5.5 0 01-.09-.12.72.72 0 010-.21c-.12.31-.26.57-.61.64a.7.7 0 01.07-.38c.07-.12 0 0 0-.07a.85.85 0 00-.26.57c.016.433.128.857.33 1.24.14.35.31.69.45 1 .128.317.186.658.17 1a.9.9 0 01-1.44.8 2.16 2.16 0 01-.59-.54c-.14-.19-.28-.38-.4-.57a3.16 3.16 0 01-.17-.43v-.14a.26.26 0 01.26.17c.05.08.26.4.4.59.115.23.288.426.5.57a.58.58 0 00.76-.31v-.07a.94.94 0 00-.07-.76c-.17-.38-.38-.76-.57-1.13a4.11 4.11 0 01-.45-1.28 1.54 1.54 0 010-.33c-.15.012-.3.012-.45 0l-.45-.12-.21.14a.35.35 0 000-.14.5.5 0 00-.26-.45.19.19 0 00-.19.19.57.57 0 00.26.52l.4.28c.14.09.12.09.19 0a.34.34 0 000-.14c.19 0 .26.12.28.31.046.24.11.478.19.71a.38.38 0 01-.09.28 1.14 1.14 0 01-.47.35.65.65 0 01-.47 0 2.5 2.5 0 01.28-.24.35.35 0 00.09-.33.11.11 0 00-.09-.07 1.14 1.14 0 00-.28 0 .29.29 0 00-.19.09 4 4 0 01-.52.35.79.79 0 01-.92-.14.93.93 0 01-.19-.33l-.07-.14a.5.5 0 01-.12.09c-.05 0-.07-.12 0-.14.029-.13.07-.257.12-.38a.15.15 0 000-.14.82.82 0 00-.31-.26c-.09-.07-.17 0-.24 0h-.12a1 1 0 000-.12.56.56 0 01.4-.45h.12a2.11 2.11 0 01-.76-.5c-.07-.07-.09-.12 0-.19s.26-.23.4-.33a1.24 1.24 0 01.83 0c.247.082.473.218.66.4l.07.07a1.17 1.17 0 00-.73-.74 3.06 3.06 0 00-.95-.19.33.33 0 01.26-.24l.54-.1a1.2 1.2 0 00.52-.26 2 2 0 00-.31-.21c-.28-.12-.57-.26-.85-.35a2.83 2.83 0 00-.8-.22 5.6 5.6 0 01-1.13-.28 4.63 4.63 0 01-1.25-.55c-.4-.26-.74-.6-1-1a1.4 1.4 0 01-.14-.33v-.12h.12l.16.09c.26.21.5.47.76.66a3.15 3.15 0 001.06.5c.31.07.61.14.92.19.31.05.52 0 .78.07l.57.07c.217.015.432.055.64.12.33.12.64.26.95.38a.11.11 0 00.12 0c.13-.029.257-.07.38-.12v-.11a7.77 7.77 0 00-.71-.35 5 5 0 00-1.42-.33l-.66-.07a8.39 8.39 0 01-1.07-.25 3.42 3.42 0 01-1-.57 1.6 1.6 0 01-.54-.76v-.21a.22.22 0 01.17 0l.26.28c.14.14.28.28.45.43.396.31.852.535 1.34.66.28.07.57.12.85.17.45.07.92.14 1.37.24a3 3 0 011.44.69c.17.14.31.07.47 0a.4.4 0 01.43.21c.12.323.12.677 0 1a.3.3 0 00.14.31h.12a.85.85 0 01.85.12.21.21 0 00.26 0 5.33 5.33 0 00.57-.31c.19-.12.09-.17.14-.26a.73.73 0 01.76-.4c.215 0 .43.023.64.07a1 1 0 00.52 0 .51.51 0 00.44-.41v-.64c0-.07 0-.14.12-.14s.09.09.09.17c.072.33.072.67 0 1a.55.55 0 01-.61.47h-.85a.48.48 0 00-.5.38.3.3 0 000 .14c.07.14.12.26.33.24.112.01.2.098.21.21a.55.55 0 00.5.45l.22-.01zm-5.57-.69c.12.123.247.24.38.35a.39.39 0 00.47 0 3.61 3.61 0 00.38-.26v-.07a.32.32 0 00-.17-.21.51.51 0 00-.26 0l-.17.07a1 1 0 01-.52 0l-.11.12zm3.26.33a.35.35 0 00.14.07.79.79 0 01.45.26c.116.011.234.011.35 0 .07 0 .12-.07.19-.09a1.43 1.43 0 00-.19-.19 1.39 1.39 0 00-.94-.05zM4.54 17.43a1 1 0 001 .28.4.4 0 00.26-.24 1.62 1.62 0 01-1.11-.14 1.33 1.33 0 01-.64-.87 1.3 1.3 0 01.54-1.44 1.31 1.31 0 00.86 1.64h.14a1.37 1.37 0 001.51-.74 3.54 3.54 0 00-.3.26c-.437.3-1.013.3-1.45 0a.89.89 0 01-.05-1.45.56.56 0 00.28.4 1.6 1.6 0 00.47.17 1.18 1.18 0 001-.31 1.5 1.5 0 00.33-.52c.19-.45.33-.92.54-1.37a8.79 8.79 0 01.45-.8c0-.07.09 0 .14 0l.52.28.33.14-.14.12a5.32 5.32 0 00-.8 1.11c-.17.31-.33.59-.47.9-.14.31-.28.71-.4 1.06l-.28.8c-.07.21-.17.4-.26.61a1.48 1.48 0 01-.66.71 1.54 1.54 0 01-.55.15 2.28 2.28 0 01-.57 0 .76.76 0 01-.67-.54.37.37 0 00-.02-.21zm14.07-.8c.012.11.012.22 0 .33 0 .14-.09.14-.21.07l-.28-.14H18a.58.58 0 010 .52.24.24 0 01-.09.12h-.11l-.07-.21a.23.23 0 00-.3-.12.87.87 0 00-.26.12h-.14a3.11 3.11 0 01-.33-1.06l.1.12a.47.47 0 00.57 0 .39.39 0 000-.33c0-.07-.07-.12-.09-.19.14 0 .14-.12.5.31l.26-.14c.09 0 0-.14 0-.19v-.21l.17.07a.24.24 0 01.12.09 3 3 0 00.5.45.47.47 0 01.17.38v.09h-.07c-.25-.08-.25-.08-.32-.08zM6.8 15.04a1.05 1.05 0 00-.64-.14 1.14 1.14 0 01-.28 0 .38.38 0 01-.28-.54c.09 0 .17.12.26.17.09.05.12 0 .12-.07a.29.29 0 01.17-.28.45.45 0 01.45.09c.202.2.28.496.2.77z" fill="#FFF"/></g></svg>;
case 'btc':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z" fillRule="nonzero"/></g></svg>;
case 'btg':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#EBA809" fillRule="nonzero"/><path fill="#FFF" d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm-.988-20.26c.002.875.002 1.75.002 2.625l1.31.002c.003-.897.005-1.795 0-2.692-.437.015-.876.036-1.312.065zm3.152 2.667c1.152.155 2.39.331 3.307 1.108 1.401 1.257 1.22 3.896-.495 4.807 1.027.24 2.044.923 2.297 2.002.33 1.414.068 3.11-1.069 4.106-1.126.925-2.65 1.047-4.043 1.18.006.818.004 1.636.002 2.456 2.93-.715 5.46-2.895 6.535-5.715 1.02-2.602.78-5.663-.662-8.06-1.273-2.16-3.437-3.75-5.867-4.358-.006.825-.006 1.65-.004 2.474zm-8.746-.035c1.27.06 2.54.048 3.81.046 0-.772.003-1.544-.004-2.316-1.422.461-2.688 1.288-3.807 2.27h.001zm-1.482 1.99c-1.493 2.54-1.661 5.799-.416 8.472 1.075 2.396 3.208 4.26 5.705 5.063.005-.77.003-1.542.003-2.312-1.275-.013-2.553.034-3.825-.035.014-.71.18-1.404.423-2.071.624-.013 1.275.096 1.878-.107.352-.296.252-.785.27-1.19-.018-2.314.01-4.629-.012-6.943.023-.373-.211-.776-.6-.85-.64-.127-1.297-.077-1.944-.081-.076-.52-.084-1.047-.093-1.574a.388.388 0 00-.071-.308c-.366.694-.948 1.243-1.318 1.935zm7.13.101v3.412c1.141-.02 2.406.106 3.404-.556.828-.541.775-1.914-.08-2.4-.998-.592-2.216-.424-3.323-.456zm0 5.248v3.785c1.408-.114 2.988.123 4.213-.726.876-.581.771-2.019-.132-2.522-1.227-.733-2.718-.5-4.08-.537zm-.051 5.925c0 .875-.002 1.75-.005 2.627.456.03.912.048 1.368.06.004-.895.002-1.791.002-2.687h-1.365z"/></g></svg>;
case 'dash':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle cx="16" cy="16" r="16" fill="#008CE7"/><g fill="#FFF"><path d="M19.086 8.004H11.81l-.602 3.367 6.562.01c3.231 0 4.19 1.173 4.159 3.12-.014.998-.449 2.686-.633 3.23-.497 1.46-1.521 3.122-5.359 3.117l-6.378-.004-.602 3.371h7.257c2.559 0 3.649-.299 4.8-.83 2.554-1.178 4.075-3.701 4.686-6.994.906-4.9-.224-8.387-6.615-8.387z"/><path d="M15.807 15.798c.237-.985.312-1.38.312-1.38H8.673c-1.904 0-2.176 1.24-2.357 1.99-.237.981-.312 1.381-.312 1.381h7.447c1.903 0 2.175-1.24 2.356-1.991z"/></g></g></svg>;
case 'doge':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#C3A634"/><path fill="#FFF" d="M13.248 14.61h4.314v2.286h-4.314v4.818h2.721c1.077 0 1.958-.145 2.644-.437.686-.291 1.224-.694 1.615-1.21a4.4 4.4 0 00.796-1.815 11.4 11.4 0 00.21-2.252 11.4 11.4 0 00-.21-2.252 4.396 4.396 0 00-.796-1.815c-.391-.516-.93-.919-1.615-1.21-.686-.292-1.567-.437-2.644-.437h-2.721v4.325zm-2.766 2.286H9v-2.285h1.482V8h6.549c1.21 0 2.257.21 3.142.627.885.419 1.607.99 2.168 1.715.56.724.977 1.572 1.25 2.543.273.971.409 2.01.409 3.115a11.47 11.47 0 01-.41 3.115c-.272.97-.689 1.819-1.25 2.543-.56.725-1.282 1.296-2.167 1.715-.885.418-1.933.627-3.142.627h-6.549v-7.104z"/></g></svg>;
case 'dot':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle fill="#E6007A" cx="16" cy="16" r="16"/><path d="M16.272 6.625c-3.707 0-6.736 3.012-6.736 6.736 0 .749.124 1.48.356 2.192a.95.95 0 001.194.589.95.95 0 00.588-1.194 4.745 4.745 0 01-.267-1.73c.071-2.512 2.103-4.58 4.616-4.704a4.86 4.86 0 015.115 4.847 4.862 4.862 0 01-4.58 4.848s-.945.053-1.408.125c-.232.035-.41.071-.535.089-.054.018-.107-.036-.09-.09l.161-.783.873-4.028a.934.934 0 00-.712-1.105.934.934 0 00-1.105.713s-2.103 9.802-2.121 9.909a.934.934 0 00.713 1.105.934.934 0 001.105-.713c.017-.107.303-1.408.303-1.408a2.367 2.367 0 011.996-1.854 21.43 21.43 0 011.051-.089 6.744 6.744 0 006.22-6.719c0-3.724-3.03-6.736-6.737-6.736zm.481 15.505a1.122 1.122 0 00-1.336.873c-.125.606.25 1.212.873 1.337a1.122 1.122 0 001.337-.874c.124-.623-.25-1.212-.874-1.336z" fill="#FFF"/></g></svg>;
case 'eos':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#000" fillRule="nonzero"/><path stroke="#FFF" d="M10.886 11.61L16 27.667l-7.588-4.754 2.474-11.303L16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986 2.475 11.303-7.588 4.754L21.12 11.61" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".64"/></g></svg>;
case 'eth':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fillRule="nonzero"><path d="M16.498 4v8.87l7.497 3.35z" fillOpacity=".602"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path d="M16.498 21.968v6.027L24 17.616z" fillOpacity=".602"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path d="M16.498 20.573l7.497-4.353-7.497-3.348z" fillOpacity=".2"/><path d="M9 16.22l7.498 4.353v-7.701z" fillOpacity=".602"/></g></g></svg>;
case 'ltc':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g></svg>;
case 'near':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g transform="matrix(.11018 0 0 .10972 .134 .2)"><ellipse ry="143.39" rx="144" cy="144" cx="144" fill="#fff"/><path d="M187.58 79.31L157.48 124a3.2 3.2 0 004.75 4.2l29.63-25.7a1.2 1.2 0 012 .91v80.46a1.2 1.2 0 01-2.12.77L102.18 77.43A15.35 15.35 0 0090.47 72h-3.13A15.34 15.34 0 0072 87.34v113.32A15.34 15.34 0 0087.34 216a15.35 15.35 0 0013.08-7.31l30.1-44.69a3.2 3.2 0 00-4.75-4.2l-29.63 25.7a1.2 1.2 0 01-2-.91v-80.48a1.2 1.2 0 012.12-.77l89.55 107.23a15.35 15.35 0 0011.71 5.43h3.13A15.34 15.34 0 00216 200.66V87.34A15.34 15.34 0 00200.66 72a15.35 15.35 0 00-13.08 7.31z" data-name="Layer 1" fill="#000"/><ellipse ry="145.831" rx="145.22" cy="144" cx="144" fill="none"/></g></svg>;
case 'polygon':
    return <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}>
<path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#7B3FE4"/>
<path d="M26.6665 16.3735V21.2004C26.6648 21.5015 26.5853 21.7969 26.4357 22.0578C26.2861 22.3187 26.0716 22.5362 25.8132 22.689L21.6465 25.0975C21.3885 25.2519 21.0936 25.3334 20.7932 25.3334C20.4928 25.3334 20.1979 25.2519 19.9399 25.0975L15.7732 22.689C15.5148 22.5362 15.3003 22.3187 15.1507 22.0578C15.0012 21.7969 14.9216 21.5015 14.9199 21.2004V19.8457L17.0532 18.603V20.9579L20.7865 23.1322L24.5199 20.9579V16.6193L20.7865 14.445L12.0399 19.5296C11.7794 19.6768 11.4855 19.7542 11.1865 19.7542C10.8876 19.7542 10.5937 19.6768 10.3332 19.5296L6.16652 17.1111C5.91208 16.9559 5.70172 16.7376 5.55576 16.4772C5.4098 16.2167 5.33316 15.923 5.3332 15.6242V10.7972C5.33492 10.4962 5.41448 10.2008 5.56404 9.93984C5.71364 9.67892 5.92812 9.4614 6.18652 9.3086L10.3532 6.90012C10.6118 6.74728 10.9064 6.66668 11.2065 6.66668C11.5066 6.66668 11.8013 6.74728 12.0599 6.90012L16.2265 9.3086C16.485 9.4614 16.6994 9.67892 16.849 9.93984C16.9986 10.2008 17.0781 10.4962 17.0799 10.7972V12.1519L14.9332 13.3863V11.0447L11.1999 8.8704L7.46652 11.0447V15.3783L11.1999 17.5526L19.9465 12.468C20.207 12.3208 20.5009 12.2434 20.7999 12.2434C21.0988 12.2434 21.3927 12.3208 21.6532 12.468L25.8199 14.8866C26.0768 15.0401 26.2898 15.2577 26.4382 15.5182C26.5865 15.7788 26.6652 16.0734 26.6665 16.3735Z" fill="white"/>
</svg>;
case 'sol':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle fill="#66F9A1" cx="16" cy="16" r="16"/><path d="M9.925 19.687a.59.59 0 01.415-.17h14.366a.29.29 0 01.207.497l-2.838 2.815a.59.59 0 01-.415.171H7.294a.291.291 0 01-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0110.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 01-.415.17H7.294a.291.291 0 01-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 00-.415-.17H7.294a.291.291 0 00-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 00.207-.498l-2.838-2.815z" fill="#FFF"/></g></svg>;
case 'trx':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g></svg>;
case 'xec':
    return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" xmlnsXlink="http://www.w3.org/1999/xlink" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><defs><style>{`.cls-1{fill:#fff;}.cls-2{fill:url(#New_Gradient_Swatch_2);}`}</style><linearGradient id="New_Gradient_Swatch_2" x1="-91.22" y1="-135.07" x2="342.81" y2="385.77" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#273498"/><stop offset="0.53" stopColor="#0074c2"/><stop offset="1" stopColor="#00abe7"/></linearGradient></defs><path d="M145.1,99.82l-31.71,18.26a2.61,2.61,0,0,0-1.31,2.29v15.32a2.48,2.48,0,0,0,1.31,2.21l13.28,7.66a2.36,2.36,0,0,0,2.53,0L184,114c9.3-5.38,9.3-20.88,0-26.26L134.75,59.38a13.17,13.17,0,0,0-13.62,0L71.89,87.75A13.45,13.45,0,0,0,65,99.58c0,19,.08,37.91,0,56.82a13.45,13.45,0,0,0,6.85,11.83l49.24,28.45a13.54,13.54,0,0,0,13.62,0L184,168.23a13.31,13.31,0,0,0,6.77-11.83V131.7l-58.62,33.92a8.31,8.31,0,0,1-8.48,0L97.49,150.45a8.3,8.3,0,0,1-4.24-7.34V112.87a8.36,8.36,0,0,1,4.15-7.26c8.73-5.06,17.53-10.11,26.26-15.17a8.36,8.36,0,0,1,8.48,0l13,7.42A1.14,1.14,0,0,1,145.1,99.82Z" className="cls-1"/><path d="M128,37.32A90.68,90.68,0,1,0,218.68,128,90.68,90.68,0,0,0,128,37.32Zm17.1,60.54-13-7.42a8.36,8.36,0,0,0-8.48,0c-8.73,5.06-17.53,10.11-26.26,15.17a8.36,8.36,0,0,0-4.15,7.26v30.24a8.3,8.3,0,0,0,4.24,7.34l26.17,15.17a8.31,8.31,0,0,0,8.48,0l58.62-33.92v24.7A13.31,13.31,0,0,1,184,168.23l-49.24,28.45a13.54,13.54,0,0,1-13.62,0L71.89,168.23A13.45,13.45,0,0,1,65,156.4c.08-18.91,0-37.83,0-56.82a13.45,13.45,0,0,1,6.85-11.83l49.24-28.37a13.17,13.17,0,0,1,13.62,0L184,87.75c9.3,5.38,9.3,20.88,0,26.26L129.2,145.56a2.36,2.36,0,0,1-2.53,0l-13.28-7.66a2.48,2.48,0,0,1-1.31-2.21V120.37a2.61,2.61,0,0,1,1.31-2.29L145.1,99.82A1.14,1.14,0,0,0,145.1,97.86Z" className="cls-1"/><path d="M128,0A128,128,0,1,0,256,128,128,128,0,0,0,128,0Zm17.1,97.86-13-7.42a8.36,8.36,0,0,0-8.48,0c-8.73,5.06-17.53,10.11-26.26,15.17a8.36,8.36,0,0,0-4.15,7.26v30.24a8.3,8.3,0,0,0,4.24,7.34l26.17,15.17a8.31,8.31,0,0,0,8.48,0l58.62-33.92v24.7A13.31,13.31,0,0,1,184,168.23l-49.24,28.45a13.54,13.54,0,0,1-13.62,0L71.89,168.23A13.45,13.45,0,0,1,65,156.4c.08-18.91,0-37.83,0-56.82a13.45,13.45,0,0,1,6.85-11.83l49.24-28.37a13.17,13.17,0,0,1,13.62,0L184,87.75c9.3,5.38,9.3,20.88,0,26.26L129.2,145.56a2.36,2.36,0,0,1-2.53,0l-13.28-7.66a2.48,2.48,0,0,1-1.31-2.21V120.37a2.61,2.61,0,0,1,1.31-2.29L145.1,99.82A1.14,1.14,0,0,0,145.1,97.86Z" className="cls-2"/></svg>;
case 'xlm':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M23.13 9.292l-2.4 1.224-11.598 5.907A6.909 6.909 0 0119.35 9.498l1.374-.7.205-.105a8.439 8.439 0 00-13.371 7.472 1.535 1.535 0 01-.834 1.484l-.725.37v1.724l2.134-1.088.691-.353.681-.347 12.226-6.23 1.374-.699 2.84-1.447V7.856L23.13 9.292zm2.816 2.012L10.201 19.32l-1.374.7L6 21.463v1.723l2.808-1.43 2.401-1.224 11.61-5.916a6.909 6.909 0 01-10.229 6.93l-.085.045-1.49.76a8.439 8.439 0 0013.372-7.475 1.536 1.536 0 01.833-1.483l.726-.37v-1.718z" fill="#FFF"/></g></svg>;
case 'xrp':
    return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none"><circle cx="16" cy="16" r="16" fill="#23292F"/><path d="M23.07 8h2.89l-6.015 5.957a5.621 5.621 0 01-7.89 0L6.035 8H8.93l4.57 4.523a3.556 3.556 0 004.996 0L23.07 8zM8.895 24.563H6l6.055-5.993a5.621 5.621 0 017.89 0L26 24.562h-2.895L18.5 20a3.556 3.556 0 00-4.996 0l-4.61 4.563z" fill="#FFF"/></g></svg>;
case 'zec':
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={clsx('tw-inline-flex tw-fill-current', {
        'tw-w-4 tw-h-4': Size === 'small',
        'tw-w-6 tw-h-6': Size === 'medium',
        'tw-w-8 tw-h-8': Size === 'large',
      })} {...hostProps}><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#ECB244"/><path fill="#FFF" d="M15.096 19.846h6.297v3.35h-3.875c.064.958.097 1.847.161 2.804h-3.261v-2.77h-3.876c0-1.093-.129-2.187.065-3.213.097-.547.678-1.026 1.033-1.504a462.137 462.137 0 013.714-4.581c.485-.582.969-1.129 1.518-1.778h-6.04v-3.35h3.586V6h3.132v2.735h3.908c0 1.128.129 2.222-.065 3.248-.097.547-.678 1.026-1.065 1.504a462.138 462.138 0 01-3.714 4.581 37.083 37.083 0 01-1.518 1.778z" fillRule="nonzero"/></g></svg>;
      default:
        return null;
    }
  }