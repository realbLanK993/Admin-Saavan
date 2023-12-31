import {FaCalendar, FaFacebook, FaInstagram, FaLink, FaMapLocationDot, FaPaperclip, FaTwitter, FaVideo, FaYoutube} from 'react-icons/fa6'

import { categoriesMap } from '@components/constants'
import moment from 'moment'

const EventRegisterationCTA = ({...props}) => {
    return (
    <div className="scroll-btn-container">
        <a className="scroll-btn">⇓</a>
    </div>
    )
}

const Anchor = ({children, ...props}) => {
    return (
        <a {...props} target="_blank" className='link'>
            {children}
        </a>
    )
}

const Title = ({title, sponsors, dates, links, venue, category, registration_link='#', team, ...props}) => {

    const SponsorItem = ({name, logo, website, type, ...props}) => {
        return (
            <div className='mr-5 text-center mt-3'>
                <h6>{type}</h6>
                <img src={logo} style={{maxWidth: '150px', height: 'auto', width: '100%'}} />
                <a href={website} target="_blank">{name}</a>
            </div>
        )
    }

    const IconLinkRow = ({children, link}) => {
        return (
            <div className='flex items-center mb-3'>
                <span className='icon'>
                    {children}
                </span>
                <span className='icon-text'>
                    <a href={link} target="_blank">{link}</a>
                </span>
            </div>
        )
    }

    const LinkMaps = ({k, url}) => {
        return {
            meet: ((u) => <IconLinkRow link={u}><FaVideo /></IconLinkRow>),
            facebook: ((u) => <IconLinkRow link={u}><FaFacebook /></IconLinkRow>),
            instagram: ((u) => <IconLinkRow link={u}><FaInstagram /></IconLinkRow>),
            youtube: ((u) => <IconLinkRow link={u}><FaYoutube /></IconLinkRow>),
            twitter: ((u) => <IconLinkRow link={u}><FaTwitter /></IconLinkRow>),
            website: ((u) => <IconLinkRow link={u}><FaLink /></IconLinkRow>),
            misc: ((u) => <IconLinkRow link={u}><FaPaperclip /></IconLinkRow>),
        }[k](url)
    }

    const TeamMate = ({name, email, role, phone}) => {
        return (
            <div className='team-card'>
                <h6>{name}</h6>
                <div className='email-wrapper'><a href={`mailto:${email}`}>{email}</a></div>
                {/* <div className='phone-wrapper'><a href={`tel:${phone}`}>{phone}</a></div> */}
                <div className="role-wrapper">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        {role}
                    </span>
                </div>
            </div>
        )
    }

    return (
    <div className="title-wrapper">
        <div className="title-container">
            <h1 className="title">{title}</h1>
            {/* <div className="sub-title">{subtitle}</div> */}
            <div className='py-3'>

                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{categoriesMap[category]}</span>
                
                <div className="md:flex justify-between block">
                    <div className="left">
                        <div className='flex items-center mb-3 mt-3'>
                            <span className='icon'>
                                <FaMapLocationDot />
                            </span>
                            <span className='icon-text'>
                                {venue}
                            </span>
                        </div>
                        <div className='flex items-center mb-3'>
                            <span className='icon'>
                                <FaCalendar />
                            </span>
                            <span className='icon-text'>
                                {moment(dates.event_start_date).format('Do MMMM, YYYY')}
                            </span>
                        </div>

                        <div className="register-btn-wrapper">
                            <a className="btn text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 no-underline mt-3 mb-3 inline-block" href={registration_link}>Register</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="links-wrapper">
                        {Object.keys(links).map((k, ind) => links[k] ? 
                            <LinkMaps k={k} key={`link_${ind}`} url={links[k]} />
                        :
                            ''
                        )}
                        </div>
                        <div className="team-wrapper">
                            <h5>Organizing Team</h5>
                            {team.map((val, ind) => (<TeamMate key={val.email} {...val} />))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-start flex-wrap">
                    {sponsors.map((item, ind) => <SponsorItem key={`sponsor_${ind}`} {...item} />)}
                </div>
            </div>
        </div>
    </div>
    )
}

const Heading1 = ({children, ...props}) => {
    return (
        <div {...props} className="h1-wrapper">
            <h1>{children}</h1>
        </div>
    )
}

const Paragraph = ({children, ...props}) => {
    return (
        <p {...props}>{children}</p>
    )
}

const EventDetails = ({children, ...props}) => {
    return (
    <div className="event-body-wrapper">
        {children}
    </div>
    )
}

const ImageResponsive = ({children, ...props}) => {
    return (
        <div {...props} className="image-wrapper">
            {children}
        </div>
    )
}

const ListWrapper = ({children, ...props}) => {
    return (
        <div {...props} className="list-wrapper">
            {children}
        </div>
    )
}

const OrderedList = ({children, ...props}) => {
    return (
        <ListWrapper {...props}>
            <ol>
                {children}
            </ol>
        </ListWrapper>
    )
}

const UnorderedList = ({children, ...props}) => {
    return (
        <ListWrapper {...props}>
            <ul>
                {children}
            </ul>
        </ListWrapper>
    )
}

export {
    Title,
    EventDetails,
    Heading1,
    Paragraph,
    ImageResponsive,
    OrderedList,
    UnorderedList,
    EventRegisterationCTA,
    Anchor,
}