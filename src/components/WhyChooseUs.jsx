"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { reasonsToChooseKhuraak } from '@/constants/reasons'
import Image from 'next/image';

export default function WhyChooseUs() {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='h-full flex items-center justify-center'>
            <div className='max-w-7xl flex flex-col items-center justify-center py-5'>
                <div className='flex flex-col gap-2 items-center justify-center py-5 px-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Why Choose खुRaak 🤔
                    </span>
                    <span className='text-base md:text-lg text-ktheme-500 text-center'>
                        Nourish Your Body, Delight Your Taste Buds, Embrace Wellness
                    </span>
                </div>
                <div className='md:w-[70%] w-[90%]'>
                    {reasonsToChooseKhuraak.map((reason, index) => (
                        <Accordion expanded={expanded === index} key={reason.title} onChange={handleChange(index)}
                            sx={{ "&:before": { content: "none" } }} className='!rounded-lg border !bg-transparent !border-ktheme-800 my-[6px]'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='dark:text-white' />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                className={`overflow-hidden !rounded-t-lg
                                    ${expanded === index ? '' : index !== reasonsToChooseKhuraak.length - 1 ? '!rounded-b-lg' : '!rounded-b-[3px]'}`}
                            >
                                <Typography sx={{ flexShrink: 0 }} className='w-[17%] md:w-[12%] mr-3 md:mr-3'>
                                    <Image
                                        src={reason.icon}
                                        alt={reason.title}
                                        width={100}
                                        height={100}
                                        className='w-12 md:w-14 dark:filter dark:invert'
                                    />
                                </Typography>
                                <Typography className='font-semibold !text-lg md:!text-xl text-ktheme-500 dark:text-ktheme-400 flex items-center'>
                                    {reason.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='bg-ktheme-100/60 dark:bg-neutral-800 dark:text-gray-100 px-7 py-3 !rounded-b-lg'>
                                <Typography className='text-sm md:text-base'>
                                    {reason.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}
