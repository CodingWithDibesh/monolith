# Step 1: Use Node 20 as the base image
FROM node:20-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy root-level files and backend-specific files
COPY package.json yarn.lock ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared ./packages/shared/
COPY packages/schemas ./packages/schemas/
COPY apps/backend/tsconfig.json ./apps/backend/
COPY apps/backend/tsconfig.build.json ./apps/backend/
COPY apps/backend/nest-cli.json ./apps/backend/

# Step 4: Install dependencies with Yarn Workspaces
RUN yarn install --frozen-lockfile

# Step 5: Copy the backend source code
COPY apps/backend ./apps/backend/

# Step 6: Generate Prisma Client
RUN yarn workspace backend prisma generate

# Step 7: Install NestJS CLI globally (optional)
RUN yarn global add @nestjs/cli

# Step 7: Set environment and expose port 7002
ENV NODE_ENV=${NODE_ENV}
EXPOSE ${PORT}

# Step 9: Start the backend server
CMD ["yarn", "workspace", "backend", "dev"]
