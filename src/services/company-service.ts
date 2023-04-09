import {CompanyModel} from "../models/company-model";

class CompanyService {
    companies(): CompanyModel[] {
        return [
            {
                name: 'ABC Media GmbH',
                job: 'Software Developer',
                image: 'griefergames.png',
                description: 'Implementierung von verteilten Systemen und Microservices mit Spring Boot',
                detailedDescription: 'Als Entwickler bei der ABC Media GmbH habe ich Softwarelösungen entwickelt, die auf verschiedenen Technologien basieren, darunter Spring Boot, Java, Kotlin, Hazelcast IMDG, PostgreSQL, Docker, REST und Hibernate.\n' +
                    '\n' +
                    'Ich habe Spring Boot verwendet, um robuste und flexible Anwendungen zu erstellen, die schnell und einfach skaliert werden können. Java und Kotlin waren wichtige Sprachen, die ich genutzt habe, um komplexe Algorithmen zu implementieren und eine optimale Performance zu gewährleisten.\n' +
                    '\n' +
                    'Für die Speicherung und Verwaltung von Daten habe ich Hazelcast IMDG und PostgreSQL eingesetzt. Mit diesen Technologien war es mir möglich, große Datenmengen schnell und effizient zu verarbeiten. Docker hat es mir ermöglicht, Anwendungen in Containern zu isolieren und zu verwalten.\n' +
                    '\n' +
                    'REST war ein weiteres wichtiges Tool, das ich genutzt habe, um eine effektive Kommunikation zwischen den verschiedenen Komponenten der Software zu gewährleisten. Schließlich habe ich Hibernate genutzt, um eine effiziente und stabile Datenbankanbindung zu gewährleisten.\n' +
                    '\n' +
                    'Insgesamt war es eine spannende Herausforderung, an der Entwicklung dieser Technologien bei der ABC Media GmbH mitzuwirken.',
                tags: ['Spring Boot', 'Java', 'Kotlin', 'Hazelcast IMDG', 'PostgreSQL', 'Docker', 'REST', 'Hibernate'],
                color: '#FF0000'
            },
            {
                name: 'Deutsche Telekom AG',
                job: 'Software Developer',
                image: 'telekom.png',
                description: 'Entwicklung von Automatisierungs-Tools für das Fixed Access Network',
                detailedDescription: 'Als Teil des Teams bei der Deutschen Telekom AG war meine Aufgabe die Entwicklung von innovativen Softwarelösungen unter Verwendung verschiedener Technologien. Dazu gehörten NestJS, Angular, VueJS, TypeScript, Python, REST, TypeORM und AutoMapper.\n' +
                    '\n' +
                    'Mit NestJS konnte ich APIs aufbauen und verwalten, die robust und flexibel waren. Angular und VueJS waren wichtige Frameworks, die ich genutzt habe, um Frontend-Anwendungen zu entwickeln, die intuitiv und benutzerfreundlich waren. TypeScript half mir dabei, komplexe Anwendungen mit Typsicherheit zu entwickeln und zu warten.\n' +
                    '\n' +
                    'Python war eine weitere Sprache, die ich verwendet habe, um Backend-Logik zu implementieren und Datenanalyse-Aufgaben zu lösen. REST war ein wichtiges Tool, das ich genutzt habe, um eine effektive Kommunikation zwischen verschiedenen Komponenten der Software zu ermöglichen. TypeORM war ein hilfreiches ORM-Framework, das ich genutzt habe, um die Datenbankanbindung zu vereinfachen und zu standardisieren.\n' +
                    '\n' +
                    'Schließlich habe ich AutoMapper eingesetzt, um Daten zwischen verschiedenen Objekten und Schichten innerhalb der Anwendung zu mappen. Insgesamt war es eine spannende Herausforderung, an der Entwicklung dieser Technologien bei der Deutschen Telekom AG mitzuwirken.',
                tags: ['NestJS', 'Angular', 'VueJS', 'TypeScript', 'Python', 'REST', 'TypeORM', 'AutoMapper'],
                color: '#E30075'
            },
            {
                name: 'EXXETA AG',
                job: 'Software Developer',
                image: 'exxeta.png',
                description: 'Erstellung einer Benutzeroberfläche zur Ladestandsverwaltung von E-Autos',
                detailedDescription: 'Als Teil des Teams bei der Exxeta AG habe ich Softwarelösungen unter Verwendung verschiedener Technologien entwickelt, darunter Java, Spring Boot, Docker, PostgreSQL, Angular, GraphQL, Apollo und TypeScript.\n' +
                    '\n' +
                    'Mit Java und Spring Boot konnte ich robuste und skalierbare Backend-Anwendungen entwickeln. Docker half mir dabei, Anwendungen in Containern zu isolieren und zu verwalten. PostgreSQL war eine zuverlässige und leistungsstarke Datenbank, die ich verwendet habe, um Daten effizient zu speichern und zu verwalten.\n' +
                    '\n' +
                    'Angular war ein wichtiges Framework, das ich genutzt habe, um Frontend-Anwendungen zu entwickeln, die intuitiv und benutzerfreundlich waren. GraphQL und Apollo waren wertvolle Tools, die ich genutzt habe, um die Kommunikation zwischen verschiedenen Komponenten der Software zu vereinfachen und zu standardisieren. TypeScript half mir dabei, komplexe Anwendungen mit Typsicherheit zu entwickeln und zu warten.\n' +
                    '\n' +
                    'Insgesamt ist es eine spannende und herausfordernde Erfahrung, an der Entwicklung dieser Technologien bei der Exxeta AG mitzuwirken.\n' +
                    '\n' +
                    '\n' +
                    '\n',
                tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Angular', 'GraphQL', 'Apollo', 'TypeScript'],
                color: '#FFFFFF'
            }
        ]
    }
}

const companyService = new CompanyService()

export default companyService
