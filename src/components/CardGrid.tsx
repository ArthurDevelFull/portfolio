import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface CardData {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ResponsiveCardGridProps {
    cards: CardData[];
    // Número de colunas por breakpoint
    cols?: {
        xs?: number;  // Mobile
        sm?: number;  // Tablet pequeno
        md?: number;  // Tablet
        lg?: number;  // Desktop
        xl?: number;  // Desktop grande
    };
}

export default function ResponsiveCardGrid({
    cards,
    cols = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }
}: ResponsiveCardGridProps) {

    // Converte número de colunas para classes do Bootstrap
    const getColClasses = () => {
        const classes: string[] = [];

        if (cols.xs) classes.push(`col-${12 / cols.xs}`);
        if (cols.sm) classes.push(`col-sm-${12 / cols.sm}`);
        if (cols.md) classes.push(`col-md-${12 / cols.md}`);
        if (cols.lg) classes.push(`col-lg-${12 / cols.lg}`);
        if (cols.xl) classes.push(`col-xl-${12 / cols.xl}`);

        return classes.join(' ');
    };

    return (
        <Container fluid className="py-5">
            <Row className="g-4">
                {cards.map((card) => (
                    <Col
                        key={card.id}
                        xs={12}  // SEMPRE 12 colunas em mobile = 1 card por linha
                        sm={cols.sm ? 12 / cols.sm : 6}
                        md={cols.md ? 12 / cols.md : 6}
                        lg={cols.lg ? 12 / cols.lg : 4}
                        xl={cols.xl ? 12 / cols.xl : 3}
                        className="d-flex"
                    >
                        <Card className="w-100 shadow-sm hover-lift">
                            <Card.Body>
                                {card.icon && (
                                    <div className="mb-3 text-primary">
                                        {card.icon}
                                    </div>
                                )}
                                <Card.Title className="h5 mb-3">
                                    {card.title}
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    {card.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

// Exemplo de uso:
export function ExampleUsage() {
    const sampleCards = [
        { id: 1, title: 'Card 1', description: 'Descrição do card 1' },
        { id: 2, title: 'Card 2', description: 'Descrição do card 2' },
        { id: 3, title: 'Card 3', description: 'Descrição do card 3' },
        { id: 4, title: 'Card 4', description: 'Descrição do card 4' },
    ];

    return (
        <ResponsiveCardGrid
            cards={sampleCards}
            cols={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        />
    );
}