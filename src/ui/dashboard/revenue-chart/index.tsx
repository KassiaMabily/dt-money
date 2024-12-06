import {generateYAxis} from '@/lib/utils';
import {
    CalendarIcon,
    ChartContainer,
    Container,
    FlexContainer,
    GridContainer,
    Last12MonthsText,
    MonthLabel,
    NoDataMessage,
    RecentRevenueTitle,
    RevenueBar,
    RevenueContainer,
    YAxisLabels
} from './styles';
import {fetchRevenue} from "@/lib/data";


export default async function RevenueChart() {
    const revenue = await fetchRevenue();
    const chartHeight = 350;

    const {yAxisLabels, topLabel} = generateYAxis(revenue);

    if (!revenue || revenue.length === 0) {
        return <NoDataMessage>No data available.</NoDataMessage>;
    }

    return (
        <Container>
            <RecentRevenueTitle>
                Recent Revenue
            </RecentRevenueTitle>
            <ChartContainer>
                <GridContainer>
                    <YAxisLabels height={chartHeight}>
                        {yAxisLabels.map((label) => (
                            <p key={label}>{label}</p>
                        ))}
                    </YAxisLabels>


                    {revenue.map((month) => (
                        <RevenueContainer key={month.month}>
                            <RevenueBar
                                style={{
                                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                                }}
                            ></RevenueBar>
                            <MonthLabel>{month.month}</MonthLabel>
                        </RevenueContainer>
                    ))}
                </GridContainer>

                <FlexContainer>
                    <CalendarIcon/>
                    <Last12MonthsText>Last 12 months</Last12MonthsText>
                </FlexContainer>
            </ChartContainer>
        </Container>
    );
}
