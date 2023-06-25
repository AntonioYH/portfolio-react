import { useGlobalStatesContext } from '../hooks/useGlobalStatesContext';
import Tecnologies from './Tecnologies';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { darkMode } = useGlobalStatesContext();

  return (
    <article
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-6 dark:text-white"
    >
      <h2 id="Skills">
        {'<Skills'}
        <span className="text-[#e2286c]">/</span>
        {'>'}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold md:text-[17px] lg:text-lg">Academlo</p>
        <a href="https://www.academlo.com/" target="_blank">
          <img
            className="h-10 md:h-12 rounded-full shadow-sm shadow-black"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpd8mU_mPDRpzPhVV-wBrzec9IVMZLZoq8IBiwEiUND2hIFFXJcvNs&usqp=CAE&s"
            alt="Academlo logo"
          />
        </a>
      </div>
      <h3 className="md:text-[17px] lg:text-lg font-bold underline">
        Web Development Full Stack
      </h3>
      <article className="md:mt-4 grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6 lg:gap-8">
        <Tecnologies text={'HTML5'} key={'HTML'}>
          <i className="fa-brands fa-html5"></i>
        </Tecnologies>
        <Tecnologies text={'CSS3'} key={'CSS'}>
          <i className="fa-brands fa-css3"></i>
        </Tecnologies>
        <Tecnologies text={'JavaScript'} key={'JavaScript'}>
          <i className="fa-brands fa-js"></i>
        </Tecnologies>
        <Tecnologies text={'ReactJS'} key={'ReactJS'}>
          <i className="fa-brands fa-react"></i>
        </Tecnologies>
        <Tecnologies text={'Tailwind CSS'} key={'Tailwind CSS'}>
          {darkMode === 'light' && (
            <img
              alt="Tailwind CSS"
              className="h-10 md:h-11 lg:h-14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAADPJJREFUeF7tnXeofEcVxz+rIdh7QbFEY1dQY40SGxZEjRI1Ght2scdC7L3ErkT/ECIaI1ZULFERFBsioqLYYk/sNRbUaGwr37fzfm/LLVPOzJ27ew8s7z3ezCnf+c7cuTNnZmfUKDNgXqNj2++ToJ9kQuAQAlUQYhoQ6mFkFYSoB47d8aStE2YmRKG+X8hMJ102fKjBqXCCZyYE+MDiU6Y/NBst/Xa2u8QmISZcW1vcChorPTmomX2EyOH0pDMfAvkIkbsbpOhPqRvQFoXMBHjUXzQfIfptTyUqRCCOEFHUb68Upc6B2Vw3RWOFrVTQpYKEKBjVEKa2hINehBhLrD5+TiNKd2/xIoR3h/NpEW9lBgWj/HGVouoa+DywCltCDBzMZD4dgYkQ6RhulYaJEGNpzkKPsBVCFLJZvAm2M648UXmMEHkMF2dFbQYrhdWDELUhWZ8/lbZtFFATIaJgG0GlSJZmJkSkVyPA+8DFQjFamenRk5kQo2rZyVkWCU2DSz/5+0vEBJFHa4wn9dSpghDZ4Bi0xdOMp9WOR3S7CRGPy3bVDGDXRIgRN31AO3tH2UKIHKa8fSpW0DRKU2UBEBjbnUaIAOxrKGrT/u1aPAhh44IlmPV5FBtdfZF4ECI22KneOBBYJWU+QtRH/nG0z8Be7vSkcmDsqzSfjxB1jRA3B24CHAVcB7gUcEngEsAFl1rmN8DPAf38JfAr9/NnwJeAv1fZioZOtT4y2tqzrnbuROI2wCOA+641eix85wIfBd4DfAI4L1ZRf73hUM43h+iPOkeJiwKPBR4OXDuHAafzb8AHl8gRaWq4hm9zuDpCJEB0a+DdwJUjWye22k+AhwJfiFVQtF4PwNURIgKcCwCvAJ408O7tW4CnA3+JiCGxSkI3WrM8dkJogngGcGQiolbVfw88AXiflcLSerIQwo6vnXBcD/g8cOnSoHnY+xjwKODXHmXbiyQDGa4gCyGSQPCrrFfIT7nXRr8aXbOoPHdi/g44GtAcYzRSNSFa+H1LR4YLx6C8oTO8E4WY1ZqG/NV6hrHkcTwDIbKuYFwO+AFwcWN0bdWtQiB/bwH82dZIHm3phPB4jdkckSPZPeMM5tyt/OifDP5XgNsBWtwykxxdL50QZuH1KrqfWwjqLVhpgc8CdwH+Vdg/zWO07O4lYyGE9h5+6PYgvAPLM1f0Mt9WSK/I9wL+m6TFv/IVgGe5NRqvWmMhxGuAp3VEpFXCTwLnAH90H803rgocAVwduKMXIvkLvc0trW9YinyQtnl8EeBzwBuB09YLNdua1XEuo6cNtCOp2boCXJafAm8F3g7o9z4RQR4JPAa4Sl9hs/83I/9O4EFmNpoVfRq4A3A14GxfW2MYIZ4NvGwpoLOAlzvW/8c30EW5vdY5vxttXmi0CxrmwkHpLwN3B/7QqiBuyLgs8BH3uquOohHSW9IJEee0t4OAloMv49rzVOY8OqRyR1k9RjR8a5t8KPkt8BS3KefvQzvmNwM+BFzRKXsx8AJ/xUMc5Qsj0D0c2xWTchv0iEiXVR9eCZyUrjRJg95A9CjTmkWM6LGgEe8hS5W1Ra9H459CFKaPECHWwsueAjwRuA/wgfDq3jWURHM6oJ3TIUUxvtmtxPb5cXngWPfYObahn70KeEafkvX/106IM4GXApqE9YjP0NNZRhMwTcTSxceVbis/Br7m9kF+AehvpfxpV/dawA2AG3eo+IebO2g/JUhqJoQmR3r+aTu5lDzM7LG05nE6R4Ig0MigESJYFoQo7G3TMNWwiKQJkpZ8S8tzgZf0GR0Ysi73PuNeN/tCaPx/9hHCFDhTZZ14nQw8MwpRT7ab6N5Uogmk8kSUNR4mDtvshAjzqqLSM05mbkSKcmFpXUPJOdGyQoioDthTKUpndDjmFeNGimGC1p6FckuTxGiEGAaBpMj9K78eONG/+CAlX+TWIZKNGxEi2Y/aFTwA0JpIjfmbGhU0OrS/HAT014kQy1TsBk6vwVo0Oq4i9uq1XMvT6ZI+qQygXaS7+S1EOaZVzTcB2j0dSrRgp1HrG3EOtCM7jRBxiCphR6Q4Ia56RK1FG/4b0ERXq7f63Vy2ihADjCjXBe7viHFN89Y5UKjEn1NdskuGDO4DQwMRwqfpfMpkbIJw1UfB7ASYK/ez+XxpeEh6JCjjSXs555VYUi5DiHAgwpujo0ay+XAFml8oMaXpo7S+CzW5O4Nz5qClZ22y6aM80jgJ93nPThlCbIakHnQjQPsV2rVTQodS5bSjp8++aNdOF3dox0/H4vT7/kUe3wO+2YbWBh6RAMW1xnhrlSSEGlzH5pXoou1bCxEpdLBWn+9YKNx1HYGECO1myuKdHz2Hp7okl4x4z74LcxFDN7x8P6OhrVYdSIggLHR302vdjS5BFQ0KixjKtApOEDGwXYeK0L7rvA4khLcVnWVUTz3Cu4YBjGu2dD5DI5PS9CfxRCCQEA1aN1tcGy3P97Rfophm65q3NJ/d6GFsSUJ3glHIkXRCHEQhXbpWRxd+GUsyGjpkK5Jq5/J/wc4lkybZfz+XDcxYEeJ8Lmv5gX6eD1ZKZxaUwV3qbOUggabwwoIQhwHvB+45SPThRt/rlporPAscHkxcjXbKWBAiLquoK5IUivshpH0BqxNgfhaXSuUPL9ilQxVSCaHVxq8COi85AllpCu1W6tV0kjWypgDybeD6KQpUd8Aeo+NveisqLTd1HcnfbiGQUkYIZesIUG8pFJO3P66grkJWJlQpeQOgT/MR/YFBiiWE0sl0Q3zbWUidatbkTUFrgUj7+Tq6r6NoV3IXeOhqQc8LR7OjpEOy7+hmxN4yPIkzUd1PoYNAQUf0SzF1f7SOsac8vuc1VNTbhk5o67Z4H7kT8Dh3zY5P+ZxldEPN68wNHHBZ2VXvciun2uSrRpa7W8wIoT0KbUcrjWxftCClSzx0mUfMnECZRyKS7nQMkuSxY1WBrt7R+U5r0flUJbpIpP+0GJDWnUqOvSHKGELojIJW/CQiho6kf90IQY0WOqQadSmpjQ+zM2H+eBaJKhaizqKlc8lf3Z0NDXdW5mheP/dTRwgdU9c303zRDfXtV+L4+bNeSm8tWlG8Rlx1s1q6lufEGZwVOW/QEr4eq8vzBY2izzHzMIOi0BFCV/voih/d+qY7F5XRlEMu5pbCM65+evdIXTuk0+B7j8MeuT1wV0B5lesXm/3T5VouOpC3+VWLkdX6/D70/1BCHO+OtWkyWOL7p05nxoNTp/beaHQX1GXrushcxNAblt6clGmtu6p04vpWgL7Rp02UG6Lv06haQgnxancuQK+SRtLJea2Afhy4c6ex3N0mKtIVp3Q8X6RZu++pPsdDCbGywnYQTtbADndH3A9dPJrVWlTjd1bSFET3XOu7PaqXUEIMFZAWwHRTbeErBE2op1G16C13KV7nI8T6u0zkVH2JgTrLoAWvwqRI6gPa69Exg8ALVpNsJlVeIkQKr5wPBip6ohEplBIXvICVhFJc5bNncMx8sVYzGsk3QuSDQHde66JP7YWkyx6JzZksEuhrCaoig0+UYySESKDlc91//WRA6Xs1iUhwTMiF4zU5XzUhPBitR4fS7HWZZ5J42PLR/yO3MKWfsWtPPnbsyzgAKiNEeLPM4PD54oLTk2ZwWPrcNQprTRq1B6Nkm9LfmLPhcDiKByoqI0RUY+xXuqEbLfQzs6xA/i1A2eb6WbX4EGWbCLE/St/W7SXcG1AiTy7Rbqi2tD8cddYjl1f7en1av8GHMoSIdC4RMy17a7Pp+BkcNze4QW4G584XmVXa/g8/UDwMDkEwliFEkEtZCitO3UGh75VY/mhrWn8rra8pc1ynvHSLiza2tP6hXV7PHd7aWt/Pn10hRBaWJSn1a58kE42Ve+wGEmKoKNJwGafXaTHH1g4kRKyZ+uvtGmna4s1AiF2Dtn6yh3hoRIiJBCGgm5Y1ht6IEKYhTsrMEAhny0QIM/DXFYU3xoYrBipCdY6QEDlQCmDFwOYDPI0qOiwhthzczhapNPZhCRHF4alSTgSKEsK+U9hrNAd7UBeXjfs50kIIv8rx4BnrN1YXH1d7TR8Xfcrk8G1ZZ9ERIjkYh1gNwCXHUqmCcRGiUhCT3aqI4QmEaI8i/Mk1tgTEZAqsKhiKEA12uwmRzdFsio1bavfUJYwQoWBFkiCyWqh3U/kFAgUJMUHeh0AN3N9uQtSAcB8LKvv/dhOiMrDrdGe110yEqLOVVrwqOdBNhBgBIUq6uESIUB6Gli8Z1mQrFgHbEWIAjsSbjK8ZC/Zg9QJCtSXEYBFPhq0Q8CdEAMusnJv0lEfAnxAbvk0MKd9c+S0uCFGkbYsYyY/YlltIGCG2HJkdDW8ixI42/HLYy2P3rK6BvC5vgrgyYtfXyREU91R4uxGobIRoA7tQ92szU8h8DVT7P+XuRKQSjMuWAAAAAElFTkSuQmCC"
            />
          )}
          {darkMode === 'dark' && (
            <img
              alt="Tailwind CSS"
              className="h-10 md:h-11 lg:h-14"
              src="https://res.cloudinary.com/du7xis1ny/image/upload/f_auto,q_auto/v1/ligth_portfolio_images/fasr62nr7hfmruooul0m"
            />
          )}
        </Tecnologies>
        <Tecnologies text={'Redux'} key={'Redux'}>
          {darkMode === 'light' && (
            <img
              alt="Redux"
              className="h-10 md:h-11 lg:h-14"
              src="data:image/png;base64,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"
            />
          )}
          {darkMode === 'dark' && (
            <img
              alt="Redux"
              className="h-10 md:h-11 lg:h-14"
              src="https://res.cloudinary.com/du7xis1ny/image/upload/f_auto,q_auto/v1/ligth_portfolio_images/c3tgq1g86o3hpdsbxlgl"
            />
          )}
        </Tecnologies>
        <Tecnologies text={'NodeJS'} key={'NodeJS'}>
          <i className="fa-brands fa-node"></i>
        </Tecnologies>
        <Tecnologies text={'PostgresSQL'} key={'PostgresSQL'}>
          {darkMode === 'light' && (
            <img
              alt="postgres"
              className="h-10 md:h-11 lg:h-14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAHtNJREFUeF7tnQeUNEtVx/+NCgZAQVSMgIiKWcGAYABBMYGK6ZkTZjChggHEnBUwC+asgKCIAXkYnoJgzgEBBXPACGIYz2+m7u5/arunq6qrZ3cfe8+Z8823U111q+r2rZtrUAEMkjapnX8veFS17Uv6PK8216e5TK0hc7wE8OKwFRdjG4oI4rJvx2XH/5ikUkQQx0ToaqzzXYELQRBHeYOPMsj5bmaP0S8EQfSYyFUfPVZg2CoBFXD1mlUs1qVsWkkQl3KOqyM9/5rMt1gdycIBLgBBrLhYTV1PWV2aOivchovT7AIQxMVZjElMjkILRxlkdrGvCGJ2iV68GrQRRC0x17a/fHvw+pLuJOl1Jb2SpFtIekX7vHKa0vMl/bWkv0qf59n/f0/SH53b1NMetRFEX6zfIS3mLSW9QvrcRNK/SWIB/1nS30j6LUm/IenvOwz/MpLeUNLrpA8bFht4I0n/msZm/H+S9BeSnp0+fyvpLSS9raS7SLqzpJt3wIkufkfSD0v6fknP6dRnVTedCKKKBdxW0vtLeqe0mC9dhfHuDftNSb8m6dclPe0wkezhdh9JHy3pXSvHPI/mvyrpByT9kKR/OBYCnQhiFt3bSPpQSe8r6Y1nW9c3eK6kp0q6VoOerM0e630tSR8r6aMkvWp917NPvCCNzfhwj3+U9HeJw/CdD5wGgBO9pn1eTdKtJd1O0h0OjPQFkh46i0mHBgsIoogrcAw8RNLHj+D6Qkl/KOlZkv40veWwZz7/Yu1fTtKbSXqjtHivIYnPIYCL/GzagDFuwHn9i5J+IY3PG8jnpdJYHAE3S8cXMgFcjY3jiPkPSddJ+mVJvyLp6R32gS5ulTgnL81bnfZ5ss5/LOlj0ridhjzbzQKCOIgTZzRUfX9JfiT8p6THSvoOSU+e7KGI1rbn970kvbOkNy1YIY6WH0tn9F+Oti8bV1ozymOHA1yNYxXieGvHdZAetZEeIA3PP41SmZ598ZRSF2cJYqqH8p5hy0+Q9OaGJmzz8yR9tyRYbAGUDygJIRQpH7nkHtnYcKH7atB1J1E+BaNXNkGrePd0FMBJOBb428unD98B5s5xAgeDEyIg8x2O85MTY76dpO9NHCSacDTxsv1IJZ6zzXtzCN7UJ2Zn9ddK+iI7R8eQgng4BkJle9nUiGOFtxmJ+7ka9OzCTUVmgb2iqXz5yID8fu/EXRiXI4IPnA1Aq+CDbML4fPgOl0FlHAPe5q+Rtm93C0AcCJHflTQq7wOC//okB/nfOY6/sGWwqWd6EsRrJ8kf9Q3gTbhn0gjy8fn7B+7UtuG2JazPOvglSU9Jn+ljZ3zGHyDpcyS9yYJFZHwkfz685Q4cj5+buOGCIbZC8ddJ+rask/eU9MgkG8VPnyrpYUsG82cPE0Q510Z4RLgKYe/3EzHwVjmwGZ+edP4ec4AFQxQIh7+biASukgM2h29Nau7suIXT/p8kuP6gpB+X9O/WMQIimwQXWgJoLmhHHHsBHEcIxBxNAajSyGWLoReHuFbSOyZsIAbOPQxKAe+dKJ6F6ghntu7PkgrnY3yapK+S9BIdB867Yq6c6d+X/YBM880jONWg8t/p2PtiSS9KD/LiwamCKP4vCaGPrul4rG0PgsC+8D2p82dKesuMGJAfECiPARxFP5MGwuKIEMsxcSxAfvrIZI+IMTlGELLvthAJVHM4AYQA5ETB33z+TcMtJQikaBBFGBxDiDPwvk2YVT80PFLapLG2nIOFQzU9NsAt4EoQY2+iIBvigyVxTAVRcHwgJAdgVseS2wRLCQIJ9/PTyKhNCD0BLAoaxjqwf1qgumHtw2gEYNV78OGBCyWFduzRCliD3kTxv5Ley9TUnFPg83GVf2QG03NfQhA4olDNUIkATNJYAAGsiiC25rntE71rEij5G1Y+/AA3aN/Lbk+uRRTIEu9ic8bs/QzD+sPtGK+YTHVM5V7faAxfkv7CGfke6TtEhsZxyDZfgeRs02+U9MmpFcT5BwWm7dlOOzZAqPzEFTgF3BC5BCcf8J2SPiJ9R+sKIb9qKks4BBwgTMYghqYBoFE8pgqLgsYTTA6181WSAYpeGJfxjw+HTyCI4pMsIxLCxVPLMbfEEo4fCPsPgKUW30oAvphwqhWvRxtBDLq1NlunFMCgDB4Adb59MQbLGn5TWmh6ubukn1vW3apPYyfAehppsgTVwElvfHjUWVkHX07MO/qmy/dLvpuqSbURxE7nDusY5lYkXwBvIFrHsYDxUHWBnz+j2s2u5bHQPBkHARx7QgD+jxEfRhXi9BeCPT4RAneAfKyiybYSBBE9H5RG4NwKFQu2+A1FIy9v5HILqhYseB98XavWuBC5+j6xbuK9JPIrAAsq8Rqt4C8k6iguAQCfCDaRKmglCMzEaBIAsQq/nb7j2kYlOgbg1XzSOYy7dG5/nnwpoSKjrf2J2XJq+8d0j0UUeIQJ2Ph70L6qoJUg/KzyPrAH4NeYgfpXK+uQYBHOYABnGp7C1rnMIbvG78gTWB0D4LJoCS2AIElcJ+B2IfwgCJpVe9GyiHAGOASAV+726TvuY+IejgF+Pi5ZzBFclxFrxdME9/yEIYAP6A0aFs8J4kslPSj1wRF6x9r+qglikO6x2YWnAc6ucGhhRl0znijmR6T2dqxzVTVrV3u/PSH4OKeQK4APy8zdpb3/tAUNYwj7lPRggcXy7BAFBHGG5q9JgRz0RsROOI8I+SKEfG1gAdHjcXPfMKm9Ediy9ti9+88tihAJgbc1QFwGewJ8i6SPS9+bjFMFBHEGNwIyCN4A3ApHIC3/XxuuG6S7JCGGANqfWnvA1v4Ljg9kIY7ckMl4u3nLa8DN449LcaY8z/dqAb+FIHBl49IGvlLSZ6fvnF2cYWvDl6WopyDIsYjutXHo2T8mf1RoAO8xcliNDwgHWhAR/oxwGSCkElxTBS0EAQFEnCKcgggoAO/iMXIH3i3FbTImMY4Wsl41913jgtd4r9fa9vMoIQshEwWgSocaOf/0jgvADQC0rQjodYNVST8ny1HcODV8QIpA4r8Yoe6X/v5Zkr6itrOG9tjuw2xOel3nKKwGjMoeQSX/0aSZETRMvgm+jNtr0AO1EfID4Fbgkp7JJ8U6nGt5bjAs6aeSIE7fjPtr0MO02f6BAJgQYlrOvwzRotfPnTZuD6EvEnwIDoF1onahFhNWh/BJ3ACaEByOuMTlUITuNmKcTX584YAIlUEcc4/gBicyDDjR8tLO3lkbd3aVIdtyZGBmxdwKeFAM/ow8prCaI8+tgBmgsPBF3CYsEwkbFawESCIihH1t+GpJn9kwCAlNJZoTzrE4MnOhHo7hca1FaLQQBHF7T0yHL9QfgZ6EtocJu2jwhkak20W43uslnZtciHBw1XS5pszDhqJSkimWA9bDG2VvCscJGkdAzvmm5vVwsztg/QzfBUeph9UVr0sLQcBuiZQKwH0bdvnSiRQjmDXkrOTMnBIGwQXfCpI2hIoZHQJ6yXSMwEU4QgLQWB443V0rmvqExLGiAzYHAsQljeyQAz4IjhWAoNzC7LZtuh9yCUCofpjziQsh070aWgiCQaifEKFzb5Okff5OfYO+2d37R9+UfZ5sKczZvCG5ysZCvbqkmyYjFrYL+gloMQYdWmiyvDx7CyEcHwMfNgpHFvBwabhfMkGgxj84TRUZKU8AmhoPgietLxcoiWaD2KuhlSBY0EhCJdKZbCLA3eLVyBQ84GZamnPOstAYy+ACDnj7MAezQRAJ6QGcswSU4DOIaCLknojnKEBhtgmBxZ+RWsEZ8G6SGsBR64CN4FHpD4TYhVGPt9wTc6YGJH41Xr57DdLjjD3fTYOuLUx73Ou/lSAggPDWESjDhgBuo5hduYYGsEfYJABBYiqfUjtdA4qhmC9HBul2mHwB5hEE3YDSmUfIUwnh2oVXf3EgVFT24LKeTzERNHNmHCc8vnuEN8cSckw17BFEmWKyHQNjFMIc4A6u/qbkfaTcd0KAL6xxClDJMGIRSRUQ8Z7IEpzzAKZjAnN7gcdpkMAEgQTA3klAJtLLAU6CIAhg10FYnAOirsPJiF0mhPtqL6cvcSuHSJrGFmeSegl0BdD1x2svzE2v7HcCcN4nNS1RHRHOyLuEbRPnSeIOc849gWzSTGzjDIKnq0q0M44lAA4WHG2qA2wnqNAB7rGceoZ58QxEn2t3HKHNKvVQwRUcuVzTIEglBCH+9aDbsq0ua0X8AHEEgKcBlD192opcyBsP0gvSuQuXq44umhiUBN8wQhHGhvp5COBgBAgHYNvh2DgEqLNoLECmPg93kDYeole1Nq0cgkH8rfIw/DWjrl04Q3DD8FMGZynfk3tO1M+yzg62cpXTj9aThzJU8rwNbDlz5QqQQSgiAnBEEFMKYM+odZ/vTWYJQbimgdk6zj2P6+uwvntduLyyNKAX72w46ZbnkpzusssnvCguw4ytB97jSHjid0oooCYfAo4Ljhqq9XgBE09aalj7ZZlbqEzhXv12ixwm94D/d4W03iTwRs7H0nFcCxmP2m6bAW84xjEAad/rRoz1CGGTXxLARmMzmYLHaNB9kkqZC6Ceo9GE/WEOcVjAcJZNLmXkA1CcI3I8m5A68BDubgxhgJchaBkHm8mHpAcxg/esIrt9g9PyIU94EnSOK+voSdHuwh6bF0I1wjXgrnKMhRioSAZuhiVHhmsa/5WCO/gXQL2Kcr7NyI086LEDS+0HHlGUC8lLcSY3IsIJ3QA11m9uVURLmyq76FlyWCmxskZSc1MeRo7QEoLgLUCjiD5c/yZxB8GnN6BCRu7m0vgL3i5wBiYjxhu1MLeXEAXFCxJu6nxNPOqM3zznJW/r8SeY6r3gmAceN6/7bjPPzLp4GTxkyyc26gpvxvL0Qc9nQCCM8L2G0KdtyYA45mocSqXTgENGXe5D6idWTTde4Um+50QhNrQPCIYNQpiMHBj3OpfiN9quiEMcIA/fFDf2sBi8Fb0B6yjOIgDBFcGyFVhYV+8qPLVFLwwcjNpWQJ6Z7Tjndojx1L5Bz9Bm648BsMBGHCb/xxYRca6t63HCG5Z0QOxfpNPRj0czebmA4jFyM2q2S/ggIpB3aeq/h6ljpcSu0hM8u4x+CWYZS5zBbI4gHjDlD8IxF4FJHJ33TmvFEqGmYoNYDEUc4oR0zr5DnIuoSXE+kgAc9Y94O+JtPkW06OWanJcbfZYawDy4BM2FI6Q3uMEOC2sEw/o4cFJPfxzLb4FYaYPDKhcmcw6zaA7lBDE9DA6WEM5c0t3Wa1i2/2cGJSkoyvmi2vqbVbsQXtuROIoudR4zJNz3wk9TOPs+5OWBeM7lM0+D4Df3rtauwZn2PQiCmEEQBtzRlXOPHvGVeFMjbpKorSXBsrDvKCEwzs0alnfkBfDaW5Q/jggn7x1NBDsCkAfI4HfBxY8Fk+7xikYADkIrKmrUr2zAeP+RHgRBxTN3phB8EgEeVDa5ew9KSGijFQRrRydnIVuARUazoCgogICGoLYGuCOK9YZL5Em9nloADn4447MIFT4nqNzsvRj/SYIoYfXWhujecOF67WXP4dhDtqT/kdlxRETsAha51kpz1MPyQqIeT7B4UUc68NqRY36TLbdKa+L+CeZI7gb45cSECxxhsjqy+tAEe3AI+if6KCX9Dk+QNlGRDpt+cxHNEcRR3yIeEh/BWMBqyYZiPYx6DFyO4oG3Jc/XtqHUTxRRZc1ReV3+Ibgl7tiCe1AaAHB/C0GzHsXtkWq1+Ey2nzBMVffvZmQisOEWkebOBWoRQFPdcfYAdoeIQ2zVMl6oQbfQ5iRSnJQ31Nm1wVPunEvkLmtepqgbgSub33PuwJGH/DR1VUPzXM5yiDZejpDjt8h5eBeUHCHmzYimBz2OEDMunsJa8JpMzBZhrSCGoG1hDDmEYELnQm6JoBxP56d5VIFB0MW4BeTHjM+hdv4H2/c6MhjEAzs86GM/xWwZ+qi4EBuQG8VKe3ZNZbSU4eKtn+7AhUC0D9IWPJaEOVBAHeEZDhCaR57eQBWfOFZK513UbjlBnE6ehJfIBYDNIfDspOVBz9PG38LmJUeQghvFtYUl0UW+EHADVDhYLtA7BH9u0TEsoVGEWR+bCuZ/19Iw9GGNjcRpQvKwTAY0J+HMIbfbqn6Qu5BdACwJHC3FhOiiuG4BQTbC6Uuedw1oLX/LHB4e1YQvhbc/AMETtzmCLhVyuCUQAZR4DQCtg9+eU1/HYA6t3e8TBDHyBpe91BTAispnbl0jh+Kp813Mt0g+B7gP5lwewBx8KADFV4K0vuAumbd0bMGK8Clb6f1WHnbvv8CxOBbj/hE3+tHOze1nx+2Abk8OAYIe0pWltA3PlDZRl7llEf0ZF6pwTBFJNVfBDaEO9S6MPtgzooLeJD4d1nis75HqLsPNpQ1W2MjmxmdB+kBkgSNPgH9Xu0OOXG+CQL0MNYmxYIHXJUtlHtCxlCjQXAjoBXjzebMilnGsb3dHQ0QE98CSzwMgSqK+I38DHNCYOD7ixhyvSsvvjv9qOPcmCBB1Z5cXJ4e6o/JL9YQm3tQdwe2Aqx3RbsYitdgA3jh8LQC5EjjiGqEL3+DFwTgVbzz4R/odgcROLB4AEzcd4wRD28CSGQhxfBInEtn41fNbgyA8hjCvlA9LDLWxAtnJDWAxuaLBs8VYJM5e3Mhxq7An+DAuql2efFuBT6+mw2OlTWSieae5VxQDFDITHNizvMYQgegx4HlR1GKE1yAI2DEbFIh7xVa3whUjmTfMyIPIaSKoc+BNwkdAcwqKBNHgTSSGAI61VoZZzdwIN0QmCsiupjrIjVBRUb3hgPhLInmYvry6XTE+ewTRhRHuhvYSu3g8yRcIQFBqqm4yMqv8CgBU35rcUgRRVOKI5xhfuI4LYwOwLgjhXjmGn7GTELWNcQr80KhIEUCofNEgPWuzM0pxGb3bL3CDw4HDR4LHeU7Q3qLj01uDQzDALTf7IV0eE9ChONl2Hp4cxP+JtyR1DlaJ7FJab4pnUZFbakEVv3mnDbfLT7HVufzNhr63hB0Z4TyPfFHluKsmiIqXxWse+eahRqECRj3FlokTx4kMEEkpY3WiOXN5S3i7IMK564a2cYotyFQ+g7UVDhnWSuQChGMssATP5Lch13Sfp/aV3+O53dhlqXxziLobl7awvvDO1SXq7o9E6D8p9yFJz9Wk2JbrsS6o30iSMGcv52zUc8oDfebm1/o7gbJRfRd1GXuIvxwIlHAQiB6CJhkn2U6GG0gbLJVwXIgIrQ0XeSRIYaDz8ode7qkI36JyABVcIR+UibFhgJts4RIIelB0DbBA3A0RqhoaBtZRVLYxyFjzcI20SQLcdlZ55rVfWd2S61EyFxeyS2wzECxrBVFgwqbmJvOnDJGb7VkDiDyKkWBnoUxDFVQfGVW974wvuHm3MEi32pxWsKv1Q6CLQ/HEVwBUo8MGMXb0wD2Ic4jsbtojbBEKn9d/ZCGDSxCA0lS9bWxdJl4kjoYQfFtuIIIDUCs0z3vBURY1I0DH/TbF27Y2QYCIZ3eR4hd3S/IbhcG8zvMU4kRHQQzh8oUIuK/yNrboEAxWPszCJ0SYOkQCJ9Jql2a/v1O+QV5NvngRKxt6RldJLCfcgPlwhKCZ5DU50UqQ0VxT8qy0KvSOQRCeFAxybl3EeojqNHd0uHDEGw4hEdRCACqbiC9jCqjqhuaR13WifX6FwFymdtXiTjQGfzyZAEHCxHUgE8ReEECD0I18wAe5ayqrjOMYG4zbUzg2kLHmhOhR9I5BEEz1adqcOG3yTCUMKphpp2o8ecYSk2DT4BiE7Z0t8Hn69kNkWAFxl49FZ/utfrE4LvP02Py8D952EouXAtZYamzlxxsvBkSy7wCrEAKPQxA7wxTlgAI8PIy/YbvHbpCf79gGvGwQ1y/g1GKz4y3zxYUb4OAig+yQSzy/uD76cD/M0k0be54jL24zrO2f54jLhMjHLntHWKb0YVM5wkBmEUHkFq6ZbFm/m5rxPWCW/8PSkbo5EzHJPmKQnmR9BlHlZfdQHam6VnLhGDIGMZ6PntiNs5fB1m7b4fYeAogcRAgfY0aWOE8j73Acxgc1E0KYCh1AdsJ/lMtNTZgfJogKVlM4OoJgZDDziFdDOdQFi4Jwin8EEy4cwt8E+kGjIdciN9diqYM7Ea09lhKAzyNsGj2r0Y3NBxwiYx31GfPzCVQuN4Y3Ao2xs5TWxp7dpkUcYrz3g9NCiCQr3MPyJ+6oPukH6Rnh0Z8homiq3B8bzNuEvk6x9AhUHUMXPwZCW6QiwkEif2J28ZzNFtYS8LR9/BWRGF06FnNBQMaiCZGPHZuTfZUQ3AoEMTs33nb0by+SDtvE4gZL5ehAwEQQRKCcclNjROL3KCY+O7A1wAXP9VBETJF+HwThd2fX9Ffa1ssJelDy1POYsbE3wB0JrnU/xd4zJZtdguR5EAR48Rbj65ir8upzYHF4m/M7ttDPIQ5MvqiwU74ABFaIKwqgR99e48lLLZasX20bhOeIiIrCIHiGsS8AJDchT0AEZWpjL0pICKxHEGWIkmCLWngo9A1UiW5Cu+DczIXTfFOQLbBm8omkGKrhTx0FXoRkqqhH7cZPtUdgjrtGYPkIylPxHFVjli33fJfrEcT82N4CToEFM/weXFWIl5JPnJfePgsiqRssa+0xFXCYMZVu0QDpYcQMCDPEDeIgML97kZUe4yzqYwFB9KLJZvzxFKJyIpRi1i6JfsKohb6OvQLDDuCCXm3iTw3yeWGwIAwvglLT3yptO6md504cLA56O95A9Hg0Ei5UwWLHB46DfBDq5WmZgkEP1eaEOJZWpTm0SU/RoLsm/uBxC9R8mLKLrLLphzpdwCGOjmvPAT0BxuMlsothpwi90iS3w9xzMTzftdQWUzj/ZS9nNUEsG25uTuv2bqN7IRO/AbcwaqoJT5dVPA3A4yPmFmj13y8YQaw+3xjAry1A7Yv6EATMrHWXuGsT+GQiims0OrqJ5Joe2l/zooiprtvUAekO+OAEwhAGkGW9vaox+VK8XPDkUA3TwFRNdBeA5TUKr2NXQd09Khw6DI+KyAUZzGtBetmehoLqxaSBIBnRXm4R9XtP10rqLl726iOjuOeShsVrWdJZVRtM1xGm70XQS2/EqxosBcFGFhnPRpml8hrVR1qr8yWIM8t6pFnvrniM4mUkDuFfAdaKvMbLGtcg+aUqpBSuVQ6xlmi37S8YQTTNoeUhvywV/wF+Dv7FG9ulZnSGFEVA8G4CyAwR8ufF3Fvm0eGZ/ZewE0Ec7c3usADbLvKNjwIeTITkn07rchLQ66qtJxV5Zbpec2vrJ23h5MTHt3h64y8ZSVDwFEdZ5HNE5BKLaXeBd5uV16OOKnOUIybgZ1lwSzcUd3TU701oo8vzfIrrmrAYAn4Ns6cN9MKPuIu40ytu+52K6+w1ZlM/CwiiM2lWoN9pZC+ERvW8uDaaiKSoxFuB1WRTopw86vvpg3THzc4AFvdf9BinSx8TBGEHSmFsWBdsDnTSiQh8BAxDcRmqC33jN9q0TzAvhxAX4EaV2vaeS5+sWLxqDlHRdym659XOL4HHUhiRWPl9FEvxIx2A4wEIDWPmwvbzW+Vqgji4Ouc3j9ZNwx2OYIl7PHJECdAlUrvH2uRFRkl4Jkl3neOiw/r3mHTrZkw/12FihUiRAxkXw2KsIk0AKLmQfW4IsssIGI6kXEzX5GUSnzF3lfNc32d+77VkhwliapReo1dPu+WBg8j6/aJe+7Lkzu45ZK7J0vUjFjSvbT3Xz1F/v5gcYmQJVqJBvz4RSyXRVvFGU9SE8PzaS1rgAuRcEo4XQJgf6fpU0SXbfJntYdvrOityaQhixdfEA2tzjQA/AxrINhG5YAvIzCI63LPKvOJ+nqtaMK2CUQt6OWky090kQXRGowblY7fN7+YmypvA163CPUi32+yum8QXcdMMOdzYxDjEv56jSVMslOSfEN9J3CSc4twU+ZI9vdAcomQCnagnT+HzCrw+BHkVlD5kgwmjn3KEERFOZhg1KAFyMFYslFq/UofEw05rumY39ROex2avT4xEXEPgtRtQPZEjHl9yVqTx6Id4yQdZEdG8fOI8aufY4kJziKOsyyldUHWFlMAceLtJysXH4bfY4DKnDiSudAxO+EU8zZBEXGpBhTX0KNNZOsgVQeyvINVjUUXHyg/REtsCREFZ5EMXy8FdcG2vcg3S0k0/9PwVQZxZneGG0oaIaK4jqLk+gWub0FLQNAjnj7zSNfeve9/XD4IoUKWqRftBN9Fma8WkwAkR03capJttttbG7WUwFATD5sAHjkAtig72he57XNXh9YMgqqZ81fh4R8YaysD1Yv8uz8JccYgmgrtAG9wZlSKC6Dzm6Ras1nHTLjc+tPYk1u5/f9pFBNG4UvOPHXeu8/hctegSBHK1jNejFTgih+jFDlI/I90tHmFxB2tQxnGR2hFE8ZjesPihiv7XWNCrPmtW4Igcogatq7ZHWYEJLnuUsa8GuRwrcMUhjrRPFQdsMUZTfS4Z6/8B8LyD46hWJe0AAAAASUVORK5CYII="
            />
          )}
          {darkMode === 'dark' && (
            <img
              alt="postgres"
              className="h-10 md:h-11 lg:h-14"
              src="https://res.cloudinary.com/du7xis1ny/image/upload/f_auto,q_auto/v1/ligth_portfolio_images/sepipoakpm909hkgx0ul"
            />
          )}
        </Tecnologies>
      </article>
    </article>
  );
};

export default Skills;
