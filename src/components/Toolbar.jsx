import React from 'react'
import { useMediaQuery } from 'react-responsive';

const Toolbar = (toolbar) => {
    const { label, view, onView, onNavigate } = toolbar;
    const isMobile = useMediaQuery({ maxWidth: 767 });


    return (
        <div className="rbc-toolbar flex flex-col items-center p-2 sm:flex-row sm:justify-between">
            <span className="rbc-toolbar-label text-lg sm:text-2xl mb-2 sm:mb-0">{label}</span>
            <div className="flex flex-col sm:flex-row items-center">
                <div className="rbc-btn-group flex mb-2 sm:mb-0 sm:mr-4">
                    <button
                        type="button"
                        className="rbc-button px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                        onClick={() => onNavigate('TODAY')}
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        className="rbc-button px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                        onClick={() => onNavigate('PREV')}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        className="rbc-button px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                        onClick={() => onNavigate('NEXT')}
                    >
                        Next
                    </button>
                </div>
                <div className="rbc-btn-group flex flex-wrap justify-center">
                    {isMobile ? (
                        <>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'month' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('month')}
                            >
                                Month
                            </button>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'day' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('day')}
                            >
                                Day
                            </button>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'agenda' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('agenda')}
                            >
                                Agenda
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'month' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('month')}
                            >
                                Month
                            </button>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'week' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('week')}
                            >
                                Week
                            </button>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'day' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('day')}
                            >
                                Day
                            </button>
                            <button
                                type="button"
                                className={`rbc-button ${view === 'agenda' ? 'rbc-active' : ''} px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
                                onClick={() => onView('agenda')}
                            >
                                Agenda
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Toolbar;