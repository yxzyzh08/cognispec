---
name: web-app
description: Template for web applications with frontend and backend components
focus_areas:
  - Frontend/backend architecture
  - Authentication and authorization
  - Data models and API design
  - Deployment and infrastructure
  - Browser compatibility
---

# Template: Web Application

This template is optimized for web applications including:
- Single Page Applications (SPA)
- Server-Side Rendered apps (SSR)
- Full-stack applications
- SaaS platforms
- Admin dashboards
- E-commerce sites

---

## Overview Additions

Add these sections to `overview.md` after "Solution Overview":

### Architecture Overview

```markdown
---

## Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Client Layer                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Browser   │  │   Mobile    │  │   Third-party   │  │
│  │   (React)   │  │   (PWA)     │  │   Integrations  │  │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │
└─────────┼────────────────┼──────────────────┼───────────┘
          │                │                  │
          └────────────────┼──────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                      API Layer                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              API Gateway / Load Balancer         │    │
│  └─────────────────────────┬───────────────────────┘    │
│                            ↓                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │    Auth     │  │     API     │  │    Background   │  │
│  │   Service   │  │   Servers   │  │     Workers     │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                     Data Layer                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  Database   │  │    Cache    │  │   File Storage  │  │
│  │ (PostgreSQL)│  │   (Redis)   │  │      (S3)       │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | [React/Vue/Next.js] | [Why chosen] |
| Backend | [Node.js/Python/Go] | [Why chosen] |
| Database | [PostgreSQL/MongoDB] | [Why chosen] |
| Cache | [Redis] | [Why chosen] |
| Hosting | [AWS/Vercel/Railway] | [Why chosen] |

<details>
<summary>📖 Architecture Decision Records</summary>

[Document key architectural decisions:
- ADR-001: Framework selection
- ADR-002: Database choice
- ADR-003: Hosting strategy]

</details>
```

### Authentication Strategy

```markdown
---

## Authentication Strategy

### Authentication Methods

| Method | Priority | Use Case |
|--------|----------|----------|
| Email/Password | Primary | Standard registration |
| OAuth (Google) | Primary | Quick sign-up |
| Magic Link | Secondary | Passwordless option |
| SSO/SAML | Future | Enterprise clients |

### Session Management

- **Type**: [JWT / Session cookies]
- **Storage**: [httpOnly cookies / localStorage]
- **Duration**: [24 hours / 7 days / until logout]
- **Refresh**: [Refresh token rotation / Silent refresh]

<details>
<summary>📖 Auth Flow Diagrams</summary>

**Login Flow:**
```
User → Login Form → API → Validate → Issue Token → Store → Redirect
```

**Token Refresh Flow:**
```
Request → Check Token → If Expired → Refresh Token → New Token → Retry
```

</details>
```

---

## Requirements Additions

Add these sections to `requirements.md` after "Functional Requirements":

### API Endpoints

```markdown
---

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | User registration | Public |
| POST | `/api/auth/login` | User login | Public |
| POST | `/api/auth/logout` | User logout | Required |
| POST | `/api/auth/refresh` | Refresh token | Required |

### Core Resources

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/[resource]` | List resources | Required |
| GET | `/api/[resource]/:id` | Get single resource | Required |
| POST | `/api/[resource]` | Create resource | Required |
| PUT | `/api/[resource]/:id` | Update resource | Required |
| DELETE | `/api/[resource]/:id` | Delete resource | Required |

<details>
<summary>📖 API Response Formats</summary>

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [...]
  }
}
```

</details>
```

### Data Models

```markdown
---

## Data Models

### Core Entities

#### User

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| email | String | Unique, Not null | User email |
| password_hash | String | Not null | Hashed password |
| name | String | Not null | Display name |
| role | Enum | Default: 'user' | User role |
| created_at | DateTime | Not null | Creation timestamp |
| updated_at | DateTime | Not null | Last update |

#### [Entity Name]

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Unique identifier |
| [field] | [type] | [constraints] | [description] |

<details>
<summary>📖 Entity Relationship Diagram</summary>

```
┌──────────┐       ┌──────────────┐
│   User   │──────<│  [Resource]  │
└──────────┘       └──────────────┘
     │
     │
     ↓
┌──────────┐
│ [Related]│
└──────────┘
```

</details>
```

### Authorization Matrix

```markdown
---

## Authorization Matrix

### Role Definitions

| Role | Description | Capabilities |
|------|-------------|--------------|
| Admin | System administrator | Full access |
| Manager | Team manager | Team + own resources |
| User | Standard user | Own resources only |
| Guest | Unauthenticated | Public resources |

### Permission Matrix

| Resource | Admin | Manager | User | Guest |
|----------|-------|---------|------|-------|
| Users | CRUD | R (team) | R (self) | - |
| [Resource] | CRUD | CRUD | CRU (own) | R |
| Settings | CRUD | R | - | - |

<details>
<summary>📖 Permission Implementation</summary>

[Describe how permissions are enforced:
- Middleware/guards
- Policy classes
- Database-level restrictions]

</details>
```

---

## Appendix Additions

Add these sections to `appendix.md` after "Technical Constraints":

### Database Schema

```markdown
---

## Database Schema

### Tables

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- [Resource] table
CREATE TABLE [resources] (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  [field] [TYPE] [CONSTRAINTS],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_[resource]_user_id ON [resources](user_id);
```

### Migrations

| Version | Description | Date |
|---------|-------------|------|
| 001 | Initial schema | [date] |
| 002 | Add [feature] | [date] |
```

### API Specification

```markdown
---

## API Specification

### OpenAPI/Swagger

The API follows OpenAPI 3.0 specification. Full documentation available at `/api/docs`.

### Rate Limiting

| Endpoint Type | Limit | Window |
|--------------|-------|--------|
| Public | 100 req | 15 min |
| Authenticated | 1000 req | 15 min |
| Sensitive (auth) | 10 req | 15 min |

### Pagination

All list endpoints support:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)
- `sort`: Sort field (default: created_at)
- `order`: Sort order (asc/desc)

### Filtering

List endpoints support filtering via query parameters:
- `[field]=[value]`: Exact match
- `[field]_gte=[value]`: Greater than or equal
- `[field]_lte=[value]`: Less than or equal
- `q=[search]`: Full-text search
```

### Environment Configuration

```markdown
---

## Environment Configuration

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection | `postgresql://...` |
| `REDIS_URL` | Cache connection | `redis://...` |
| `JWT_SECRET` | Token signing key | `[random-string]` |
| `API_URL` | Backend API URL | `https://api.example.com` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `LOG_LEVEL` | Logging verbosity | `info` |
| `RATE_LIMIT` | Requests per window | `1000` |

### Environment Files

```
.env.example     # Template (committed)
.env.local       # Local development (not committed)
.env.production  # Production (not committed)
```
```

### Browser Compatibility

```markdown
---

## Browser Compatibility

### Supported Browsers

| Browser | Minimum Version | Market Share |
|---------|-----------------|--------------|
| Chrome | 90+ | ~65% |
| Safari | 14+ | ~19% |
| Firefox | 88+ | ~4% |
| Edge | 90+ | ~4% |

### Required Features

| Feature | Support | Fallback |
|---------|---------|----------|
| ES6 Modules | All supported | Bundler transpilation |
| CSS Grid | All supported | - |
| Fetch API | All supported | - |
| WebSockets | All supported | Long polling |

<details>
<summary>📖 Polyfills and Fallbacks</summary>

[List any required polyfills or fallback strategies for older browsers]

</details>
```

---

## Quality Checklist

Web application-specific quality checks:

- [ ] API endpoints follow RESTful conventions
- [ ] Authentication and authorization properly implemented
- [ ] Input validation on both client and server
- [ ] CORS configured correctly
- [ ] Rate limiting in place
- [ ] Database queries optimized with indexes
- [ ] Responsive design works across breakpoints
- [ ] Accessibility (WCAG 2.1 AA) compliance
- [ ] Security headers configured (CSP, HSTS, etc.)
- [ ] Environment variables properly managed
- [ ] Error handling and logging implemented
- [ ] Supported browsers tested
